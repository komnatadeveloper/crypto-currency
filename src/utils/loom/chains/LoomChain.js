import BN from "bn.js";
import { ethers } from "ethers-alice";
import {
  CachedNonceTxMiddleware,
  Client,
  CryptoUtils,
  LocalAddress,
  LoomProvider,
  SignedTxMiddleware
} from "loom-js/dist";
import { EthCoin, TransferGateway } from "loom-js/dist/contracts";
import {
  B64ToUint8Array,
  bytesToHexAddr,
  publicKeyFromPrivateKey
} from "loom-js/dist/crypto-utils";
import { TransferGatewayTokenKind } from "loom-js/dist/proto/transfer_gateway_pb";
import Address from "../Address";
import LoomConfig from "../config/LoomConfig";
import ERC20 from "../contracts/ERC20";
import ERC20Registry from "../contracts/ERC20Registry";
import MoneyMarket from "../contracts/MoneyMarket";
import ERC20Asset from "../ERC20Asset";
import { toBigNumber } from "../utils/big-number-utils";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class LoomChain {
    constructor(privateKey, testnet = false) {
        this.getPrivateKey = () => this.privateKey;
        this.getClient = () => this.client;
        this.getProvider = () => this.provider;
        this.getAddress = () => this.address;
        this.getSigner = () => this.provider.getSigner();
        this.getETHAsync = () => {
            return this.eth
                ? Promise.resolve(this.eth)
                : EthCoin.createAsync(this.client, this.address).then(eth => {
                    this.eth = eth;
                    return eth;
                });
        };
        this.getTransferGatewayAsync = () => {
            return this.gateway
                ? Promise.resolve(this.gateway)
                : TransferGateway.createAsync(this.client, this.address).then(gateway => {
                    this.gateway = gateway;
                    return gateway;
                });
        };
        this.getERC20Registry = () => {
            return new ERC20Registry(this.config.erc20Registry.address, this.getSigner());
        };
        this.getMoneyMarket = () => {
            return new MoneyMarket(this.config.moneyMarket.address, this.getSigner());
        };
        this.createERC20 = (asset) => {
            return new ERC20(asset.loomAddress.toLocalAddressString(), this.getSigner());
        };
        this.getERC20AssetsAsync = () => __awaiter(this, void 0, void 0, function* () {
            const tokens = yield this.getERC20Registry().getRegisteredTokens();
            return tokens.map((token) => new ERC20Asset(token.name, token.symbol, token.decimals, Address.createLoomAddress(token.localAddress), Address.createEthereumAddress(token.ethAddress)));
        });
        this.updateAssetBalancesAsync = (assets, updateBalance) => {
            return Promise.all(assets.map(asset => {
                const promise = asset.loomAddress.isZero() ? this.balanceOfETHAsync() : this.balanceOfERC20Async(asset);
                return promise.then(balance => {
                    updateBalance(asset.loomAddress, balance);
                });
            }));
        };
        this.balanceOfETHAsync = () => __awaiter(this, void 0, void 0, function* () {
            const eth = yield this.getETHAsync();
            return toBigNumber(yield eth.getBalanceOfAsync(this.address));
        });
        this.transferETHAsync = (to, amount) => {
            return this.getETHAsync().then(eth => {
                return {
                    hash: "0x02",
                    to: eth.address.local.toChecksumString(),
                    from: this.address.toLocalAddressString(),
                    confirmations: 0,
                    nonce: 0,
                    gasLimit: toBigNumber(0),
                    gasPrice: toBigNumber(0),
                    data: "0x",
                    value: amount,
                    chainId: Number(this.config.chainId),
                    wait: () => {
                        return eth.transferAsync(Address.createLoomAddress(to), new BN(amount.toString())).then(() => {
                            return { byzantium: true };
                        });
                    }
                };
            });
        };
        this.approveETHAsync = (spender, amount) => __awaiter(this, void 0, void 0, function* () {
            return this.getETHAsync().then(eth => {
                return {
                    hash: "0x02",
                    to: eth.address.local.toChecksumString(),
                    from: this.address.toLocalAddressString(),
                    confirmations: 0,
                    nonce: 0,
                    gasLimit: toBigNumber(0),
                    gasPrice: toBigNumber(0),
                    data: "0x",
                    value: toBigNumber(0),
                    chainId: Number(this.config.chainId),
                    wait: () => {
                        return eth.approveAsync(Address.createLoomAddress(spender), new BN(amount.toString())).then(() => {
                            return { byzantium: true };
                        });
                    }
                };
            });
        });
        this.transferERC20Async = (asset, to, amount) => {
            const erc20 = this.createERC20(asset);
            return erc20.transfer(to, amount, { gasLimit: 0 });
        };
        this.balanceOfERC20Async = (asset) => {
            const erc20 = new ERC20(asset.loomAddress.toLocalAddressString(), this.getSigner());
            return erc20.balanceOf(this.address.toLocalAddressString());
        };
        this.approveERC20Async = (asset, spender, amount) => {
            const erc20 = new ERC20(asset.loomAddress.toLocalAddressString(), this.getSigner());
            return erc20.approve(spender, amount, { gasLimit: 0 });
        };
        /**
         * Withdraw `amount` of ETH to `EthereumChain`.
         *
         * @link https://loomx.io/developers/en/transfer-gateway.html
         *
         * @param amount
         * @param ethereumGateway Address of ethereum gateway
         */
        this.withdrawETHAsync = (amount, ethereumGateway) => {
            return this.getTransferGatewayAsync().then(gateway => {
                return {
                    hash: "0x02",
                    to: gateway.address.local.toChecksumString(),
                    from: this.address.toLocalAddressString(),
                    confirmations: 0,
                    nonce: 0,
                    gasLimit: toBigNumber(0),
                    gasPrice: toBigNumber(0),
                    data: "0x",
                    value: toBigNumber(0),
                    chainId: Number(this.config.chainId),
                    wait: () => {
                        return gateway
                            .withdrawETHAsync(new BN(amount.toString()), Address.createEthereumAddress(ethereumGateway))
                            .then(() => {
                            return { byzantium: true };
                        });
                    }
                };
            });
        };
        /**
         * Withdraw `amount` of ERC20 to `EthereumChain`.
         *
         * @link https://loomx.io/developers/en/transfer-gateway.html
         *
         * @param asset
         * @param amount
         */
        this.withdrawERC20Async = (asset, amount) => {
            return this.getTransferGatewayAsync().then(gateway => {
                return {
                    hash: "0x02",
                    to: gateway.address.local.toChecksumString(),
                    from: this.address.toLocalAddressString(),
                    confirmations: 0,
                    nonce: 0,
                    gasLimit: toBigNumber(0),
                    gasPrice: toBigNumber(0),
                    data: "0x",
                    value: toBigNumber(0),
                    chainId: Number(this.config.chainId),
                    wait: () => {
                        return gateway.withdrawERC20Async(new BN(amount.toString()), asset.loomAddress).then(() => {
                            return { byzantium: true };
                        });
                    }
                };
            });
        };
        /**
         * Withdraw `amount` of ERC20 to `EthereumChain`.
         *
         * @link https://loomx.io/developers/en/transfer-gateway.html
         *
         * @param assetAddress Address of ethereum asset contract. If asset is ETH, it should be 0x00000000000000000000.
         * @param ownerAddress Address of ethereum asset owner.
         */
        this.listenToTokenWithdrawal = (assetAddress, ownerAddress) => new Promise((resolve, reject) => {
            this.getTransferGatewayAsync().then(gateway => {
                const timer = setTimeout(() => reject(new Error("Timeout while waiting for withdrawal to be signed")), 120000);
                gateway.on(TransferGateway.EVENT_TOKEN_WITHDRAWAL, event => {
                    if (event.tokenContract.equals(Address.createEthereumAddress(assetAddress)) &&
                        event.tokenOwner.equals(Address.createEthereumAddress(ownerAddress))) {
                        clearTimeout(timer);
                        gateway.removeAllListeners(TransferGateway.EVENT_TOKEN_WITHDRAWAL);
                        resolve(bytesToHexAddr(event.sig));
                    }
                });
            });
        });
        /**
         * Get a pending ETH withdrawal receipt that has not been processed by `EthereumChain`.
         * If this returns non-null, you need to submit its signature to `EthereumChain`.
         *
         * @param ethereumNonce Nonce from calling `EthereumChain.getWithdrawalNonceAsync`.
         */
        this.getPendingETHWithdrawalReceipt = (ethereumNonce) => __awaiter(this, void 0, void 0, function* () {
            const gateway = yield this.getTransferGatewayAsync();
            const receipt = yield gateway.withdrawalReceiptAsync(this.getAddress());
            if (receipt && receipt.tokenKind === TransferGatewayTokenKind.ETH) {
                const loomNonce = receipt.withdrawalNonce.toString();
                if (toBigNumber(ethereumNonce).eq(toBigNumber(loomNonce))) {
                    return receipt;
                }
            }
            return null;
        });
        /**
         * Get a pending ERC20 withdrawal receipt that has not been processed by `EthereumChain`.
         * If this returns non-null, you need to submit its signature to `EthereumChain`.
         *
         * @param ethereumNonce Nonce from calling `EthereumChain.getWithdrawalNonceAsync`.
         */
        this.getPendingERC20WithdrawalReceipt = (ethereumNonce) => __awaiter(this, void 0, void 0, function* () {
            const gateway = yield this.getTransferGatewayAsync();
            const receipt = yield gateway.withdrawalReceiptAsync(this.getAddress());
            if (receipt && receipt.tokenKind === TransferGatewayTokenKind.ERC20) {
                const loomNonce = receipt.withdrawalNonce.toString();
                if (toBigNumber(ethereumNonce).eq(toBigNumber(loomNonce))) {
                    return receipt;
                }
            }
            return null;
        });
        this.init = (privateKey) => {
            const publicKey = publicKeyFromPrivateKey(privateKey);
            this.address = Address.createLoomAddress(LocalAddress.fromPublicKey(CryptoUtils.publicKeyFromPrivateKey(privateKey)).toChecksumString());
            this.client = new Client(this.config.networkName, this.config.endpoint + "/websocket", this.config.endpoint + "/queryws");
            this.client.txMiddleware = [
                new CachedNonceTxMiddleware(publicKey, this.client),
                new SignedTxMiddleware(privateKey)
            ];
            this.client.on("end", () => this.init(privateKey));
            this.client.on("error", () => { });
            this.provider = new ethers.providers.Web3Provider(new LoomProvider(this.client, privateKey, () => this.client.txMiddleware));
        };
        this.config = LoomConfig.create(testnet);
        this.privateKey = privateKey;
        Address.setLoomNetworkName(this.config.networkName);
        this.init(B64ToUint8Array(privateKey));
    }
}
export default LoomChain;
//# sourceMappingURL=LoomChain.js.map
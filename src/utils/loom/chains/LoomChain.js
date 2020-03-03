var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import BN from "bn.js";
import { ethers } from "ethers-alice";
import { CachedNonceTxMiddleware, Client, CryptoUtils, LocalAddress, LoomProvider, SignedTxMiddleware } from "loom-js/dist";
import { EthCoin, TransferGateway } from "loom-js/dist/contracts";
import { B64ToUint8Array, bytesToHexAddr, publicKeyFromPrivateKey } from "loom-js/dist/crypto-utils";
import { TransferGatewayTokenKind } from "loom-js/dist/proto/transfer_gateway_pb";
import Address from "../Address";
import LoomConfig from "../config/LoomConfig";
import ERC20 from "../contracts/ERC20";
import ERC20Registry from "../contracts/ERC20Registry";
import MoneyMarket from "../contracts/MoneyMarket";
import ERC20Asset from "../ERC20Asset";
import { toBigNumber } from "../utils/big-number-utils";
var LoomChain = /** @class */ (function () {
    function LoomChain(privateKey, testnet) {
        var _this = this;
        if (testnet === void 0) { testnet = false; }
        this.getPrivateKey = function () { return _this.privateKey; };
        this.getClient = function () { return _this.client; };
        this.getProvider = function () { return _this.provider; };
        this.getAddress = function () { return _this.address; };
        this.getSigner = function () { return _this.provider.getSigner(); };
        this.getETHAsync = function () {
            return _this.eth
                ? Promise.resolve(_this.eth)
                : EthCoin.createAsync(_this.client, _this.address).then(function (eth) {
                    _this.eth = eth;
                    return eth;
                });
        };
        this.getTransferGatewayAsync = function () {
            return _this.gateway
                ? Promise.resolve(_this.gateway)
                : TransferGateway.createAsync(_this.client, _this.address).then(function (gateway) {
                    _this.gateway = gateway;
                    return gateway;
                });
        };
        this.getERC20Registry = function () {
            return new ERC20Registry(_this.config.erc20Registry.address, _this.getSigner());
        };
        this.getMoneyMarket = function () {
            return new MoneyMarket(_this.config.moneyMarket.address, _this.getSigner());
        };
        this.createERC20 = function (asset) {
            return new ERC20(asset.loomAddress.toLocalAddressString(), _this.getSigner());
        };
        this.getERC20AssetsAsync = function () { return __awaiter(_this, void 0, void 0, function () {
            var tokens;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getERC20Registry().getRegisteredTokens()];
                    case 1:
                        tokens = _a.sent();
                        return [2 /*return*/, tokens.map(function (token) {
                                return new ERC20Asset(token.name, token.symbol, token.decimals, Address.createLoomAddress(token.localAddress), Address.createEthereumAddress(token.ethAddress));
                            })];
                }
            });
        }); };
        this.updateAssetBalancesAsync = function (assets, updateBalance) {
            return Promise.all(assets.map(function (asset) {
                var promise = asset.loomAddress.isZero() ? _this.balanceOfETHAsync() : _this.balanceOfERC20Async(asset);
                return promise.then(function (balance) {
                    updateBalance(asset.loomAddress, balance);
                });
            }));
        };
        this.balanceOfETHAsync = function () { return __awaiter(_this, void 0, void 0, function () {
            var eth, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getETHAsync()];
                    case 1:
                        eth = _b.sent();
                        _a = toBigNumber;
                        return [4 /*yield*/, eth.getBalanceOfAsync(this.address)];
                    case 2: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                }
            });
        }); };
        this.transferETHAsync = function (to, amount) {
            return _this.getETHAsync().then(function (eth) {
                return {
                    hash: "0x02",
                    to: eth.address.local.toChecksumString(),
                    from: _this.address.toLocalAddressString(),
                    confirmations: 0,
                    nonce: 0,
                    gasLimit: toBigNumber(0),
                    gasPrice: toBigNumber(0),
                    data: "0x",
                    value: amount,
                    chainId: Number(_this.config.chainId),
                    wait: function () {
                        return eth.transferAsync(Address.createLoomAddress(to), new BN(amount.toString())).then(function () {
                            return { byzantium: true };
                        });
                    }
                };
            });
        };
        this.approveETHAsync = function (spender, amount) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getETHAsync().then(function (eth) {
                        return {
                            hash: "0x02",
                            to: eth.address.local.toChecksumString(),
                            from: _this.address.toLocalAddressString(),
                            confirmations: 0,
                            nonce: 0,
                            gasLimit: toBigNumber(0),
                            gasPrice: toBigNumber(0),
                            data: "0x",
                            value: toBigNumber(0),
                            chainId: Number(_this.config.chainId),
                            wait: function () {
                                return eth.approveAsync(Address.createLoomAddress(spender), new BN(amount.toString())).then(function () {
                                    return { byzantium: true };
                                });
                            }
                        };
                    })];
            });
        }); };
        this.transferERC20Async = function (asset, to, amount) {
            var erc20 = _this.createERC20(asset);
            return erc20.transfer(to, amount, { gasLimit: 0 });
        };
        this.balanceOfERC20Async = function (asset) {
            var erc20 = new ERC20(asset.loomAddress.toLocalAddressString(), _this.getSigner());
            return erc20.balanceOf(_this.address.toLocalAddressString());
        };
        this.approveERC20Async = function (asset, spender, amount) {
            var erc20 = new ERC20(asset.loomAddress.toLocalAddressString(), _this.getSigner());
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
        this.withdrawETHAsync = function (amount, ethereumGateway) {
            return _this.getTransferGatewayAsync().then(function (gateway) {
                return {
                    hash: "0x02",
                    to: gateway.address.local.toChecksumString(),
                    from: _this.address.toLocalAddressString(),
                    confirmations: 0,
                    nonce: 0,
                    gasLimit: toBigNumber(0),
                    gasPrice: toBigNumber(0),
                    data: "0x",
                    value: toBigNumber(0),
                    chainId: Number(_this.config.chainId),
                    wait: function () {
                        return gateway
                            .withdrawETHAsync(new BN(amount.toString()), Address.createEthereumAddress(ethereumGateway))
                            .then(function () {
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
        this.withdrawERC20Async = function (asset, amount) {
            return _this.getTransferGatewayAsync().then(function (gateway) {
                return {
                    hash: "0x02",
                    to: gateway.address.local.toChecksumString(),
                    from: _this.address.toLocalAddressString(),
                    confirmations: 0,
                    nonce: 0,
                    gasLimit: toBigNumber(0),
                    gasPrice: toBigNumber(0),
                    data: "0x",
                    value: toBigNumber(0),
                    chainId: Number(_this.config.chainId),
                    wait: function () {
                        return gateway.withdrawERC20Async(new BN(amount.toString()), asset.loomAddress).then(function () {
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
        this.listenToTokenWithdrawal = function (assetAddress, ownerAddress) {
            return new Promise(function (resolve, reject) {
                _this.getTransferGatewayAsync().then(function (gateway) {
                    var timer = setTimeout(function () { return reject(new Error("Timeout while waiting for withdrawal to be signed")); }, 120000);
                    gateway.on(TransferGateway.EVENT_TOKEN_WITHDRAWAL, function (event) {
                        if (event.tokenContract.equals(Address.createEthereumAddress(assetAddress)) &&
                            event.tokenOwner.equals(Address.createEthereumAddress(ownerAddress))) {
                            clearTimeout(timer);
                            gateway.removeAllListeners(TransferGateway.EVENT_TOKEN_WITHDRAWAL);
                            resolve(bytesToHexAddr(event.sig));
                        }
                    });
                });
            });
        };
        /**
         * Get a pending ETH withdrawal receipt that has not been processed by `EthereumChain`.
         * If this returns non-null, you need to submit its signature to `EthereumChain`.
         *
         * @param ethereumNonce Nonce from calling `EthereumChain.getWithdrawalNonceAsync`.
         */
        this.getPendingETHWithdrawalReceipt = function (ethereumNonce) { return __awaiter(_this, void 0, void 0, function () {
            var gateway, receipt, loomNonce;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getTransferGatewayAsync()];
                    case 1:
                        gateway = _a.sent();
                        return [4 /*yield*/, gateway.withdrawalReceiptAsync(this.getAddress())];
                    case 2:
                        receipt = _a.sent();
                        if (receipt && receipt.tokenKind === TransferGatewayTokenKind.ETH) {
                            loomNonce = receipt.withdrawalNonce.toString();
                            if (toBigNumber(ethereumNonce).eq(toBigNumber(loomNonce))) {
                                return [2 /*return*/, receipt];
                            }
                        }
                        return [2 /*return*/, null];
                }
            });
        }); };
        /**
         * Get a pending ERC20 withdrawal receipt that has not been processed by `EthereumChain`.
         * If this returns non-null, you need to submit its signature to `EthereumChain`.
         *
         * @param ethereumNonce Nonce from calling `EthereumChain.getWithdrawalNonceAsync`.
         */
        this.getPendingERC20WithdrawalReceipt = function (ethereumNonce) { return __awaiter(_this, void 0, void 0, function () {
            var gateway, receipt, loomNonce;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getTransferGatewayAsync()];
                    case 1:
                        gateway = _a.sent();
                        return [4 /*yield*/, gateway.withdrawalReceiptAsync(this.getAddress())];
                    case 2:
                        receipt = _a.sent();
                        if (receipt && receipt.tokenKind === TransferGatewayTokenKind.ERC20) {
                            loomNonce = receipt.withdrawalNonce.toString();
                            if (toBigNumber(ethereumNonce).eq(toBigNumber(loomNonce))) {
                                return [2 /*return*/, receipt];
                            }
                        }
                        return [2 /*return*/, null];
                }
            });
        }); };
        this.init = function (privateKey) {
            var publicKey = publicKeyFromPrivateKey(privateKey);
            _this.address = Address.createLoomAddress(LocalAddress.fromPublicKey(CryptoUtils.publicKeyFromPrivateKey(privateKey)).toChecksumString());
            _this.client = new Client(_this.config.networkName, _this.config.endpoint + "/websocket", _this.config.endpoint + "/queryws");
            _this.client.txMiddleware = [
                new CachedNonceTxMiddleware(publicKey, _this.client),
                new SignedTxMiddleware(privateKey)
            ];
            _this.client.on("end", function () { return _this.init(privateKey); });
            _this.client.on("error", function () { });
            _this.provider = new ethers.providers.Web3Provider(new LoomProvider(_this.client, privateKey, function () { return _this.client.txMiddleware; }));
        };
        this.config = LoomConfig.create(testnet);
        this.privateKey = privateKey;
        Address.setLoomNetworkName(this.config.networkName);
        this.init(B64ToUint8Array(privateKey));
    }
    return LoomChain;
}());
export default LoomChain;
//# sourceMappingURL=LoomChain.js.map
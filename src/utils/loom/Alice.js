var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { EthersSigner } from "loom-js/dist";
import { AddressMapper } from "loom-js/dist/contracts";
import EthereumChain from "./chains/EthereumChain";
import LoomChain from "./chains/LoomChain";
import { ethereumPrivateKeyFromMnemonic, loomPrivateKeyFromMnemonic } from "./utils/crypto-utils";
export default class Alice {
    /**
     * @param ethereumPrivateKey - Ethereum Private Key (hex)
     * @param loomPrivateKey - Loom Private Key (base64)
     * @param testnet - `true` if you want to interact with testnet, `false` otherwise
     */
    constructor(ethereumPrivateKey, loomPrivateKey, testnet = false) {
        this.getEthereumChain = () => this.ethereumChain;
        this.getLoomChain = () => this.loomChain;
        /**
         * @returns `true` if the ethereum account is mapped with the loom account
         */
        this.areAccountsMapped = () => __awaiter(this, void 0, void 0, function* () {
            const addressMapper = yield AddressMapper.createAsync(this.loomChain.getClient(), this.loomChain.getAddress());
            return yield addressMapper.hasMappingAsync(this.ethereumChain.getAddress());
        });
        /**
         * Maps the ethereum account with the loom account if not mapped
         */
        this.mapAccounts = () => __awaiter(this, void 0, void 0, function* () {
            const addressMapper = yield AddressMapper.createAsync(this.loomChain.getClient(), this.loomChain.getAddress());
            // @ts-ignore
            const signer = new EthersSigner(this.ethereumChain.getSigner());
            yield addressMapper.addIdentityMappingAsync(this.ethereumChain.getAddress(), this.loomChain.getAddress(), signer);
        });
        this.ethereumChain = new EthereumChain(ethereumPrivateKey, testnet);
        this.loomChain = new LoomChain(loomPrivateKey, testnet);
    }
    static fromMnemonic(mnemonic, testnet = false) {
        return new Alice(ethereumPrivateKeyFromMnemonic(mnemonic), loomPrivateKeyFromMnemonic(mnemonic), testnet);
    }
}
//# sourceMappingURL=Alice.js.map
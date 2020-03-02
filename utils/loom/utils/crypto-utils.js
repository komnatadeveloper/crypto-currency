"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ethers_1 = require("ethers");
var hdkey_1 = __importDefault(require("hdkey"));
var dist_1 = require("loom-js/dist");
exports.createEthereumPrivateKey = function () {
    return ethers_1.Wallet.createRandom().privateKey;
};
exports.createLoomPrivateKey = function () {
    return dist_1.CryptoUtils.Uint8ArrayToB64(dist_1.CryptoUtils.generatePrivateKey());
};
exports.ethereumPrivateKeyFromMnemonic = function (mnemonic) {
    return ethers_1.Wallet.fromMnemonic(mnemonic).privateKey;
};
// Commented by komnataDeveloper @2020/02/27 due to compilation error
// export const loomPrivateKeyFromMnemonic = (mnemonic: string) => {
//     const seed = mnemonicToSeed(mnemonic);
//     const hdkey = HDKey.fromMasterSeed(seed ).derive("m/44'/148'/0'");
//     return CryptoUtils.Uint8ArrayToB64(CryptoUtils.generatePrivateKeyFromSeed(hdkey.privateKey));
// };
exports.loomPrivateKeyFromMnemonic = function (mnemonic) {
    // const seed = mnemonicToSeed(mnemonic);
    var seed;
    var hdkey = hdkey_1.default.fromMasterSeed(seed).derive("m/44'/148'/0'");
    return dist_1.CryptoUtils.Uint8ArrayToB64(dist_1.CryptoUtils.generatePrivateKeyFromSeed(hdkey.privateKey));
};

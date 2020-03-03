// import { Wallet } from "ethers";
import { Wallet } from "ethers-alice";
import HDKey from "hdkey";
import { CryptoUtils } from "loom-js/dist";
export var createEthereumPrivateKey = function () {
    return Wallet.createRandom().privateKey;
};
export var createLoomPrivateKey = function () {
    return CryptoUtils.Uint8ArrayToB64(CryptoUtils.generatePrivateKey());
};
export var ethereumPrivateKeyFromMnemonic = function (mnemonic) {
    return Wallet.fromMnemonic(mnemonic).privateKey;
};
// Commented by komnataDeveloper @2020/02/27 due to compilation error
// export const loomPrivateKeyFromMnemonic = (mnemonic: string) => {
//     const seed = mnemonicToSeed(mnemonic);
//     const hdkey = HDKey.fromMasterSeed(seed ).derive("m/44'/148'/0'");
//     return CryptoUtils.Uint8ArrayToB64(CryptoUtils.generatePrivateKeyFromSeed(hdkey.privateKey));
// };
export var loomPrivateKeyFromMnemonic = function (mnemonic) {
    // const seed = mnemonicToSeed(mnemonic);
    var seed;
    var hdkey = HDKey.fromMasterSeed(seed).derive("m/44'/148'/0'");
    return CryptoUtils.Uint8ArrayToB64(CryptoUtils.generatePrivateKeyFromSeed(hdkey.privateKey));
};
//# sourceMappingURL=crypto-utils.js.map
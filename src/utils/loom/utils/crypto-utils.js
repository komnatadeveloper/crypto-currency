// import { Wallet } from "ethers";
import { Wallet } from "ethers-alice";
import HDKey from "hdkey";
import { CryptoUtils } from "loom-js/dist";
export const createEthereumPrivateKey = () => {
    return Wallet.createRandom().privateKey;
};
export const createLoomPrivateKey = () => {
    return CryptoUtils.Uint8ArrayToB64(CryptoUtils.generatePrivateKey());
};

// 2020.03.11 komnataDeveloper
export const createLoomPrivateKeyFromEthKey = ( ethKey ) => {  
    console.log(ethKey);  
    const arrayForm = CryptoUtils.B64ToUint8Array(ethKey)
    console.log(arrayForm);
    const loomKey = CryptoUtils.Uint8ArrayToB64( arrayForm  );
    console.log(loomKey);
    
    console.log(CryptoUtils.generatePrivateKey());
    console.log(CryptoUtils.Uint8ArrayToB64(CryptoUtils.generatePrivateKey()));
    return loomKey
};

export const ethereumPrivateKeyFromMnemonic = (mnemonic) => {
    return Wallet.fromMnemonic(mnemonic).privateKey;
};
// Commented by komnataDeveloper @2020/02/27 due to compilation error
// export const loomPrivateKeyFromMnemonic = (mnemonic: string) => {
//     const seed = mnemonicToSeed(mnemonic);
//     const hdkey = HDKey.fromMasterSeed(seed ).derive("m/44'/148'/0'");
//     return CryptoUtils.Uint8ArrayToB64(CryptoUtils.generatePrivateKeyFromSeed(hdkey.privateKey));
// };
export const loomPrivateKeyFromMnemonic = (mnemonic) => {
    // const seed = mnemonicToSeed(mnemonic);
    let seed;
    const hdkey = HDKey.fromMasterSeed(seed).derive("m/44'/148'/0'");
    return CryptoUtils.Uint8ArrayToB64(CryptoUtils.generatePrivateKeyFromSeed(hdkey.privateKey));
};
//# sourceMappingURL=crypto-utils.js.map
// import { ethers } from "ethers";
import { ethers } from "ethers-alice";

export default class ERC20Registry extends ethers.Contract {
    constructor(address: string, signerOrProvider: ethers.Signer | ethers.providers.Provider) {
        // super(address, require("@alice-finance/alice-proxies/abis/ERC20Registry.json"), signerOrProvider);   // komnataDeveloper  03/03/2020
        super(address, require("../alice-proxies/abis-ERC20Proxy.json"), signerOrProvider);
    }
}

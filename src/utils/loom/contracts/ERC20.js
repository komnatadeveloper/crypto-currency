// import { ethers } from "ethers";
import { ethers } from "ethers-alice";
export default class ERC20 extends ethers.Contract {
    constructor(address, signerOrProvider) {
        super(address, require("loom-js/dist/mainnet-contracts/ERC20.json"), signerOrProvider);
    }
}
//# sourceMappingURL=ERC20.js.map
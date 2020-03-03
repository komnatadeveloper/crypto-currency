// import { ethers } from "ethers";
import { ethers } from "ethers-alice";
export default class Gateway extends ethers.Contract {
    constructor(address, signerOrProvider) {
        super(address, require("./abis/Gateway.json"), signerOrProvider);
    }
}
//# sourceMappingURL=Gateway.js.map
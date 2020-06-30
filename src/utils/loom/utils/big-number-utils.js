import BN from "bn.js";
// import { ethers } from "ethers";
import { ethers } from "ethers-alice";
export const toBigNumber = (value) => {
    if (BN.isBN(value)) {
        return new ethers.utils.BigNumber(value.toString());
    }
    else {
        return ethers.utils.bigNumberify(value);
    }
};
//# sourceMappingURL=big-number-utils.js.map
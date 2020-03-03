import BN from "bn.js";
// import { ethers } from "ethers";
import { ethers } from "ethers-alice";
export var toBigNumber = function (value) {
    if (BN.isBN(value)) {
        return new ethers.utils.BigNumber(value.toString());
    }
    else {
        return ethers.utils.bigNumberify(value);
    }
};
//# sourceMappingURL=big-number-utils.js.map
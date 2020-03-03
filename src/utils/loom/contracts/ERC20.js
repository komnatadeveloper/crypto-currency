var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// import { ethers } from "ethers";
import { ethers } from "ethers-alice";
var ERC20 = /** @class */ (function (_super) {
    __extends(ERC20, _super);
    function ERC20(address, signerOrProvider) {
        return _super.call(this, address, require("loom-js/dist/mainnet-contracts/ERC20.json"), signerOrProvider) || this;
    }
    return ERC20;
}(ethers.Contract));
export default ERC20;
//# sourceMappingURL=ERC20.js.map
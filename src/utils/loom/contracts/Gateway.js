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
var Gateway = /** @class */ (function (_super) {
    __extends(Gateway, _super);
    function Gateway(address, signerOrProvider) {
        return _super.call(this, address, require("./abis/Gateway.json"), signerOrProvider) || this;
    }
    return Gateway;
}(ethers.Contract));
export default Gateway;
//# sourceMappingURL=Gateway.js.map
"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var ethers_1 = require("ethers");
var ERC20Registry = /** @class */ (function (_super) {
    __extends(ERC20Registry, _super);
    function ERC20Registry(address, signerOrProvider) {
        return _super.call(this, address, require("@alice-finance/alice-proxies/abis/ERC20Registry.json"), signerOrProvider) || this;
    }
    return ERC20Registry;
}(ethers_1.ethers.Contract));
exports.default = ERC20Registry;

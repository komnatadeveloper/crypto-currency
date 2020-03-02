"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ERC20Asset = /** @class */ (function () {
    function ERC20Asset(name, symbol, decimals, loomAddress, ethereumAddress) {
        this.name = name;
        this.symbol = symbol;
        this.decimals = decimals;
        this.loomAddress = loomAddress;
        this.ethereumAddress = ethereumAddress;
    }
    return ERC20Asset;
}());
exports.default = ERC20Asset;

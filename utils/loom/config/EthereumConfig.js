"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EthereumConfig = /** @class */ (function () {
    function EthereumConfig(_a) {
        var chainId = _a.chainId, networkName = _a.networkName;
        this.chainId = chainId;
        this.networkName = networkName;
        this.gateway = require("../contracts/networks/Gateway.json")[this.chainId];
    }
    EthereumConfig.create = function (testnet) {
        if (testnet === void 0) { testnet = false; }
        return new EthereumConfig(testnet ? this.rinkeby : this.mainnet);
    };
    EthereumConfig.rinkeby = { chainId: "4", networkName: "rinkeby" };
    EthereumConfig.mainnet = { chainId: "1", networkName: "mainnet" };
    return EthereumConfig;
}());
exports.default = EthereumConfig;

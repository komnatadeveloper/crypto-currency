var LoomConfig = /** @class */ (function () {
    function LoomConfig(_a) {
        var chainId = _a.chainId, networkName = _a.networkName, endpoint = _a.endpoint;
        this.chainId = chainId;
        this.networkName = networkName;
        this.endpoint = endpoint;
        this.erc20Registry = require("@alice-finance/alice-proxies/networks/ERC20Registry.json")[this.chainId];
        this.moneyMarket = require("@alice-finance/money-market/networks/MoneyMarket.json")[this.chainId];
    }
    LoomConfig.create = function (testnet) {
        if (testnet === void 0) { testnet = false; }
        return new LoomConfig(testnet ? this.extdev : this.plasma);
    };
    LoomConfig.extdev = {
        chainId: "9545242630824",
        networkName: "extdev-plasma-us1",
        endpoint: "wss://extdev-plasma-us1.dappchains.com"
    };
    LoomConfig.plasma = {
        chainId: "13654820909954",
        networkName: "default",
        endpoint: "wss://plasma.dappchains.com"
    };
    return LoomConfig;
}());
export default LoomConfig;
//# sourceMappingURL=LoomConfig.js.map
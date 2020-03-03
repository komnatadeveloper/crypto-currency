class LoomConfig {
    constructor({ chainId, networkName, endpoint }) {
        this.chainId = chainId;
        this.networkName = networkName;
        this.endpoint = endpoint;
        // this.erc20Registry = require("@alice-finance/alice-proxies/networks/ERC20Registry.json")[this.chainId]; // komnataDeveloper  03/03/2020
        this.erc20Registry = require("../alice-proxies/abis-ERC20Proxy.json")[this.chainId];
        this.moneyMarket = require("../money-market/MoneyMarket.json")[this.chainId];
    }
    static create(testnet = false) {
        return new LoomConfig(testnet ? this.extdev : this.plasma);
    }
}
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
export default LoomConfig;
//# sourceMappingURL=LoomConfig.js.map
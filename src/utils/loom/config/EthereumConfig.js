class EthereumConfig {
    constructor({ chainId, networkName }) {
        this.chainId = chainId;
        this.networkName = networkName;
        // this.gateway = require("../contracts/networks/Gateway.json")[this.chainId];  2020.03.10 komnataDevelpper
        this.gateway = require("../contracts/networks/Gateway.json")[this.chainId];
    }
    static create(testnet = false) {
        return new EthereumConfig(testnet ? this.rinkeby : this.mainnet);
    }
}
EthereumConfig.rinkeby = { chainId: "4", networkName: "rinkeby" };
EthereumConfig.mainnet = { chainId: "1", networkName: "mainnet" };
export default EthereumConfig;
//# sourceMappingURL=EthereumConfig.js.map
import { Address as LoomAddress, LocalAddress } from "loom-js/dist";
import { ZERO_ADDRESS } from "./constants";
export default class Address extends LoomAddress {
    constructor() {
        super(...arguments);
        this.toLocalAddressString = () => this.local.toChecksumString();
        this.toString = () => this.chainId + ":" + this.toLocalAddressString();
        this.isZero = () => this.local.toString() === ZERO_ADDRESS;
    }
    static setLoomNetworkName(networkName) {
        this.networkName = networkName;
    }
    /**
     * @param address an address of format <Chain ID>:<Hex Address>
     */
    static fromString(address) {
        const parts = address.split(":");
        if (parts.length !== 2) {
            throw new Error("Invalid address string");
        }
        return new Address(parts[0], LocalAddress.fromHexString(parts[1]));
    }
    /**
     * @param address Hex address
     * @returns an `Address` of chainId "eth"
     */
    static createEthereumAddress(address) {
        return new Address("eth", LocalAddress.fromHexString(address));
    }
    /**
     * @param address Hex address
     * @returns an `Address` of chainId "default"
     */
    static createLoomAddress(address) {
        return new Address(this.networkName, LocalAddress.fromHexString(address));
    }
}
Address.networkName = "default";
//# sourceMappingURL=Address.js.map
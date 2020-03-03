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
import { Address as LoomAddress, LocalAddress } from "loom-js/dist";
import { ZERO_ADDRESS } from "./constants";
var Address = /** @class */ (function (_super) {
    __extends(Address, _super);
    function Address() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toLocalAddressString = function () { return _this.local.toChecksumString(); };
        _this.toString = function () { return _this.chainId + ":" + _this.toLocalAddressString(); };
        _this.isZero = function () { return _this.local.toString() === ZERO_ADDRESS; };
        return _this;
    }
    Address.setLoomNetworkName = function (networkName) {
        this.networkName = networkName;
    };
    /**
     * @param address an address of format <Chain ID>:<Hex Address>
     */
    Address.fromString = function (address) {
        var parts = address.split(":");
        if (parts.length !== 2) {
            throw new Error("Invalid address string");
        }
        return new Address(parts[0], LocalAddress.fromHexString(parts[1]));
    };
    /**
     * @param address Hex address
     * @returns an `Address` of chainId "eth"
     */
    Address.createEthereumAddress = function (address) {
        return new Address("eth", LocalAddress.fromHexString(address));
    };
    /**
     * @param address Hex address
     * @returns an `Address` of chainId "default"
     */
    Address.createLoomAddress = function (address) {
        return new Address(this.networkName, LocalAddress.fromHexString(address));
    };
    Address.networkName = "default";
    return Address;
}(LoomAddress));
export default Address;
//# sourceMappingURL=Address.js.map
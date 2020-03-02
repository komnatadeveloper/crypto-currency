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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ethers_1 = require("ethers");
var toSavingsRecord = function (record) { return ({
    id: record[0],
    interestRate: record[2],
    balance: record[3],
    principal: record[4],
    initialTimestamp: new Date(record[5].toNumber() * 1000),
    lastTimestamp: new Date(record[6].toNumber() * 1000),
    withdrawals: []
}); };
var MoneyMarket = /** @class */ (function (_super) {
    __extends(MoneyMarket, _super);
    function MoneyMarket(address, signerOrProvider) {
        return _super.call(this, address, require("@alice-finance/money-market/abis/MoneyMarket.json"), signerOrProvider) || this;
    }
    /**
     * Decimals that were used to calculate interest rate.
     * If decimals are 18, you need to divide each value of interest rate in MoneyMarket by 10^18.
     */
    MoneyMarket.prototype.DECIMALS = function () {
        return this.functions.DECIMALS();
    };
    /**
     * Multiplier that were used to calculate interest rate.
     * If multiplier is 10^18, you need to divide each value of interest rate in MoneyMarket by 10^18.
     */
    MoneyMarket.prototype.MULTIPLIER = function () {
        return this.functions.MULTIPLIER();
    };
    /**
     * Address of ERC20 asset used for savings.
     */
    MoneyMarket.prototype.asset = function () {
        return this.functions.asset();
    };
    /**
     * Address of loan contract.
     */
    MoneyMarket.prototype.loan = function () {
        return this.functions.loan();
    };
    /**
     * Address of savings interest calculator.
     */
    MoneyMarket.prototype.savingsCalculator = function () {
        return this.functions.savingsCalculator();
    };
    /**
     * Total amount of savings.
     */
    MoneyMarket.prototype.totalFunds = function () {
        return this.functions.totalFunds();
    };
    /**
     * Total amount of loan.
     */
    MoneyMarket.prototype.totalBorrows = function () {
        return this.functions.totalBorrows();
    };
    /**
     * Deposit an amount of asset to start savings.
     *
     * @param amount Amount of asset to save
     * @param overrides Options for transaction
     */
    MoneyMarket.prototype.deposit = function (amount, overrides) {
        return this.functions.deposit(amount, __assign(__assign({}, overrides), { gasLimit: 0 }));
    };
    /**
     * Withdraw an amount of asset from existing savings.
     * The amount must be smaller than or equal to the total amount that has been deposited to `recordId`
     *
     * @param recordId Record ID of previously deposited savings
     * @param amount Amount of asset to withdraw
     * @param overrides Options for transaction
     */
    MoneyMarket.prototype.withdraw = function (recordId, amount, overrides) {
        return this.functions.withdraw(recordId, amount, __assign(__assign({}, overrides), { gasLimit: 0 }));
    };
    /**
     * Get savings record ids as an array of specific `user`.
     *
     * @param user Address
     */
    MoneyMarket.prototype.getSavingsRecordIds = function (user) {
        return this.functions.getSavingsRecordIds(user);
    };
    /**
     * Get savings records as an array of specific `user`.
     *
     * @param user Address
     */
    MoneyMarket.prototype.getSavingsRecords = function (user) {
        return this.functions.getSavingsRecords(user).then(function (records) { return records.map(toSavingsRecord); });
    };
    /**
     * Get savings record of specific `recordId`.
     *
     * @param recordId
     */
    MoneyMarket.prototype.getSavingsRecord = function (recordId) {
        return this.functions.getSavingsRecord(recordId).then(toSavingsRecord);
    };
    /**
     * Get raw savings record ids as an array of specific `user`.
     * Raw savings record doesn't reflect the latest interest rate. It must be used for debugging.
     *
     * @param user Address
     */
    MoneyMarket.prototype.getRawSavingsRecordIds = function (user) {
        return this.functions.getRawSavingsRecordIds(user);
    };
    /**
     * Get raw savings records as an array of specific `user`.
     * Raw savings record doesn't reflect the latest interest rate. It must be used for debugging.
     *
     * @param user Address
     */
    MoneyMarket.prototype.getRawSavingsRecords = function (user) {
        return this.functions.getRawSavingsRecords(user).then(function (records) { return records.map(toSavingsRecord); });
    };
    /**
     * Get raw savings record of specific `recordId`.
     * Raw savings record doesn't reflect the latest interest rate. It must be used for debugging.
     *
     * @param recordId
     */
    MoneyMarket.prototype.getRawSavingsRecord = function (recordId) {
        return this.functions.getRawSavingsRecord(recordId).then(toSavingsRecord);
    };
    /**
     * Get current daily savings interest rate.
     */
    MoneyMarket.prototype.getCurrentSavingsInterestRate = function () {
        return this.functions.getCurrentSavingsInterestRate();
    };
    /**
     * Get current yearly savings interest rate.
     */
    MoneyMarket.prototype.getCurrentSavingsAPR = function () {
        return this.functions.getCurrentSavingsAPR();
    };
    /**
     * Get expected daily savings interest rate when `amount` is deposited.
     *
     * @param amount
     */
    MoneyMarket.prototype.getExpectedSavingsInterestRate = function (amount) {
        return this.functions.getExpectedSavingsInterestRate(amount);
    };
    /**
     * Get expected yearly savings interest rate when `amount` is deposited.
     *
     * @param amount
     */
    MoneyMarket.prototype.getExpectedSavingsAPR = function (amount) {
        return this.functions.getExpectedSavingsAPR(amount);
    };
    return MoneyMarket;
}(ethers_1.ethers.Contract));
exports.default = MoneyMarket;

// import { ethers } from "ethers";
import { ethers } from "ethers-alice";
const toSavingsRecord = (record) => ({
    id: record[0],
    interestRate: record[2],
    balance: record[3],
    principal: record[4],
    initialTimestamp: new Date(record[5].toNumber() * 1000),
    lastTimestamp: new Date(record[6].toNumber() * 1000),
    withdrawals: []
});
export default class MoneyMarket extends ethers.Contract {
    constructor(address, signerOrProvider) {
        // super(address, require("@alice-finance/money-market/abis/MoneyMarket.json"), signerOrProvider);  2020.03.03 komnataDeveloper
        super(address, require("../money-market/MoneyMarket.json"), signerOrProvider);
    }
    /**
     * Decimals that were used to calculate interest rate.
     * If decimals are 18, you need to divide each value of interest rate in MoneyMarket by 10^18.
     */
    DECIMALS() {
        return this.functions.DECIMALS();
    }
    /**
     * Multiplier that were used to calculate interest rate.
     * If multiplier is 10^18, you need to divide each value of interest rate in MoneyMarket by 10^18.
     */
    MULTIPLIER() {
        return this.functions.MULTIPLIER();
    }
    /**
     * Address of ERC20 asset used for savings.
     */
    asset() {
        return this.functions.asset();
    }
    /**
     * Address of loan contract.
     */
    loan() {
        return this.functions.loan();
    }
    /**
     * Address of savings interest calculator.
     */
    savingsCalculator() {
        return this.functions.savingsCalculator();
    }
    /**
     * Total amount of savings.
     */
    totalFunds() {
        return this.functions.totalFunds();
    }
    /**
     * Total amount of loan.
     */
    totalBorrows() {
        return this.functions.totalBorrows();
    }
    /**
     * Deposit an amount of asset to start savings.
     *
     * @param amount Amount of asset to save
     * @param overrides Options for transaction
     */
    deposit(amount, overrides) {
        return this.functions.deposit(amount, Object.assign(Object.assign({}, overrides), { gasLimit: 0 }));
    }
    /**
     * Withdraw an amount of asset from existing savings.
     * The amount must be smaller than or equal to the total amount that has been deposited to `recordId`
     *
     * @param recordId Record ID of previously deposited savings
     * @param amount Amount of asset to withdraw
     * @param overrides Options for transaction
     */
    withdraw(recordId, amount, overrides) {
        return this.functions.withdraw(recordId, amount, Object.assign(Object.assign({}, overrides), { gasLimit: 0 }));
    }
    /**
     * Get savings record ids as an array of specific `user`.
     *
     * @param user Address
     */
    getSavingsRecordIds(user) {
        return this.functions.getSavingsRecordIds(user);
    }
    /**
     * Get savings records as an array of specific `user`.
     *
     * @param user Address
     */
    getSavingsRecords(user) {
        return this.functions.getSavingsRecords(user).then(records => records.map(toSavingsRecord));
    }
    /**
     * Get savings record of specific `recordId`.
     *
     * @param recordId
     */
    getSavingsRecord(recordId) {
        return this.functions.getSavingsRecord(recordId).then(toSavingsRecord);
    }
    /**
     * Get raw savings record ids as an array of specific `user`.
     * Raw savings record doesn't reflect the latest interest rate. It must be used for debugging.
     *
     * @param user Address
     */
    getRawSavingsRecordIds(user) {
        return this.functions.getRawSavingsRecordIds(user);
    }
    /**
     * Get raw savings records as an array of specific `user`.
     * Raw savings record doesn't reflect the latest interest rate. It must be used for debugging.
     *
     * @param user Address
     */
    getRawSavingsRecords(user) {
        return this.functions.getRawSavingsRecords(user).then(records => records.map(toSavingsRecord));
    }
    /**
     * Get raw savings record of specific `recordId`.
     * Raw savings record doesn't reflect the latest interest rate. It must be used for debugging.
     *
     * @param recordId
     */
    getRawSavingsRecord(recordId) {
        return this.functions.getRawSavingsRecord(recordId).then(toSavingsRecord);
    }
    /**
     * Get current daily savings interest rate.
     */
    getCurrentSavingsInterestRate() {
        return this.functions.getCurrentSavingsInterestRate();
    }
    /**
     * Get current yearly savings interest rate.
     */
    getCurrentSavingsAPR() {
        return this.functions.getCurrentSavingsAPR();
    }
    /**
     * Get expected daily savings interest rate when `amount` is deposited.
     *
     * @param amount
     */
    getExpectedSavingsInterestRate(amount) {
        return this.functions.getExpectedSavingsInterestRate(amount);
    }
    /**
     * Get expected yearly savings interest rate when `amount` is deposited.
     *
     * @param amount
     */
    getExpectedSavingsAPR(amount) {
        return this.functions.getExpectedSavingsAPR(amount);
    }
}
//# sourceMappingURL=MoneyMarket.js.map
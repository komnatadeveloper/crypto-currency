"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ethers_alice_1 = require("ethers-alice");
var Address_1 = __importDefault(require("../Address"));
var EthereumConfig_1 = __importDefault(require("../config/EthereumConfig"));
var constants_1 = require("../constants");
var ERC20_1 = __importDefault(require("../contracts/ERC20"));
var Gateway_1 = __importDefault(require("../contracts/Gateway"));
var big_number_utils_1 = require("../utils/big-number-utils");
var ethers_utils_1 = require("../utils/ethers-utils");
var EthereumChain = /** @class */ (function () {
    function EthereumChain(privateKey, testnet) {
        var _this = this;
        if (testnet === void 0) { testnet = false; }
        this.getPrivateKey = function () { return _this.privateKey; };
        this.getProvider = function () { return _this.provider; };
        this.getAddress = function () { return _this.address; };
        this.getSigner = function () { return _this.wallet; };
        this.getGateway = function () {
            return new Gateway_1.default(_this.config.gateway.address, _this.getSigner());
        };
        this.createERC20 = function (asset) {
            return new ERC20_1.default(asset.ethereumAddress.toLocalAddressString(), _this.getSigner());
        };
        this.updateAssetBalancesAsync = function (assets, updateBalance) {
            return Promise.all(assets.map(function (asset) {
                var promise = asset.ethereumAddress.isZero()
                    ? _this.balanceOfETHAsync()
                    : _this.balanceOfERC20Async(asset);
                return promise.then(function (balance) { return updateBalance(asset.ethereumAddress, balance); });
            }));
        };
        this.transferERC20Async = function (asset, to, amount) {
            var erc20 = _this.createERC20(asset);
            return erc20.transfer(to, amount);
        };
        this.balanceOfETHAsync = function () {
            return _this.provider.getBalance(_this.address.toLocalAddressString());
        };
        this.transferETHAsync = function (to, amount) {
            return _this.getSigner().sendTransaction({ to: to, value: amount.toHexString() });
        };
        this.approveETHAsync = function (spender, amount) {
            return Promise.resolve({
                to: constants_1.ZERO_ADDRESS,
                from: _this.address.toLocalAddressString(),
                confirmations: 0,
                nonce: 0,
                gasLimit: big_number_utils_1.toBigNumber(0),
                gasPrice: big_number_utils_1.toBigNumber(0),
                data: "0x",
                value: big_number_utils_1.toBigNumber(0),
                chainId: Number(_this.config.chainId),
                wait: function () {
                    return Promise.resolve({
                        byzantium: true
                    });
                }
            });
        };
        this.balanceOfERC20Async = function (asset) {
            var erc20 = _this.createERC20(asset);
            return erc20.balanceOf(_this.address.toLocalAddressString());
        };
        this.approveERC20Async = function (asset, spender, amount) {
            var erc20 = _this.createERC20(asset);
            return erc20.approve(spender, amount);
        };
        /**
         * Deposit ETH to Gateway. The `amount` is transferred to `LoomChain` after 10 blocks of confirmations.
         *
         * @link https://loomx.io/developers/en/transfer-gateway.html
         *
         * @param amount
         */
        this.depositETHAsync = function (amount) {
            var gateway = _this.getGateway();
            return _this.getSigner().sendTransaction({ to: gateway.address, value: amount });
        };
        /**
         * Deposit ERC20 `asset` to Gateway. The `amount` is transferred to `LoomChain` after 10 blocks of confirmations.
         *
         * @link https://loomx.io/developers/en/transfer-gateway.html
         *
         * @param asset
         * @param amount
         */
        this.depositERC20Async = function (asset, amount) {
            var gateway = _this.getGateway();
            return gateway.depositERC20(amount, asset.ethereumAddress.toLocalAddressString());
        };
        /**
         * Withdraw `amount` of ETH from Gateway by submitting `signature`.
         * The signature is valid if generated by calling `LoomChain.withdrawETHAsync()`.
         *
         * @link https://loomx.io/developers/en/transfer-gateway.html
         *
         * @param amount
         * @param signature
         */
        this.withdrawETHAsync = function (amount, signature) {
            var gateway = _this.getGateway();
            return gateway.withdrawETH(amount, signature);
        };
        /**
         * Withdraw `amount` of ERC20 `asset` from Gateway by submitting `signature`.
         * The signature is valid if generated by calling `LoomChain.withdrawETHAsync()`.
         *
         * @link https://loomx.io/developers/en/transfer-gateway.html
         *
         * @param asset
         * @param amount
         * @param signature
         */
        this.withdrawERC20Async = function (asset, amount, signature) {
            var gateway = _this.getGateway();
            return gateway.withdrawERC20(amount, signature, asset.ethereumAddress.toLocalAddressString());
        };
        /**
         * Get a list of `ETHReceived` logs.
         * Every time `depositETHAsync` is called, an `ETHReceived` event is logged.
         *
         * @returns an array of `ETHReceived`
         */
        this.getETHReceivedLogsAsync = function (fromBlock, toBlock) {
            if (fromBlock === void 0) { fromBlock = 0; }
            if (toBlock === void 0) { toBlock = 0; }
            return __awaiter(_this, void 0, void 0, function () {
                var provider, gateway, transaction, blockNumber, event, logs;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            provider = this.getProvider();
                            gateway = this.getGateway();
                            if (!(fromBlock === 0)) return [3 /*break*/, 2];
                            return [4 /*yield*/, provider.getTransaction(this.config.gateway.transactionHash)];
                        case 1:
                            transaction = _a.sent();
                            fromBlock = Number(transaction.blockNumber || 0);
                            _a.label = 2;
                        case 2:
                            if (!(toBlock === 0)) return [3 /*break*/, 4];
                            return [4 /*yield*/, provider.getBlockNumber()];
                        case 3:
                            blockNumber = _a.sent();
                            toBlock = Number(blockNumber);
                            _a.label = 4;
                        case 4:
                            event = gateway.interface.events.ETHReceived;
                            return [4 /*yield*/, ethers_utils_1.getLogs(provider, {
                                    address: this.config.gateway.address,
                                    topics: [event.topic],
                                    fromBlock: fromBlock,
                                    toBlock: toBlock
                                })];
                        case 5:
                            logs = _a.sent();
                            return [2 /*return*/, logs
                                    .sort(function (l1, l2) { return (l2.blockNumber || 0) - (l1.blockNumber || 0); })
                                    .map(function (log) { return (__assign({ log: log }, event.decode(log.data))); })
                                    .filter(function (data) { return Address_1.default.createEthereumAddress(data.from || constants_1.ZERO_ADDRESS).equals(_this.getAddress()); })];
                    }
                });
            });
        };
        /**
         * Get a list of `ERC20Received` logs.
         * Every time `depositERC20Async` is called, an `ERC20Received` event is logged.
         *
         * @param asset
         *
         * @returns an array of `ERC20Received`
         */
        this.getERC20ReceivedLogsAsync = function (asset, fromBlock, toBlock) {
            if (fromBlock === void 0) { fromBlock = 0; }
            if (toBlock === void 0) { toBlock = 0; }
            return __awaiter(_this, void 0, void 0, function () {
                var provider, gateway, transaction, blockNumber, event, logs;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            provider = this.getProvider();
                            gateway = this.getGateway();
                            if (!(fromBlock === 0)) return [3 /*break*/, 2];
                            return [4 /*yield*/, provider.getTransaction(this.config.gateway.transactionHash)];
                        case 1:
                            transaction = _a.sent();
                            fromBlock = Number(transaction.blockNumber || 0);
                            _a.label = 2;
                        case 2:
                            if (!(toBlock === 0)) return [3 /*break*/, 4];
                            return [4 /*yield*/, provider.getBlockNumber()];
                        case 3:
                            blockNumber = _a.sent();
                            toBlock = Number(blockNumber);
                            _a.label = 4;
                        case 4:
                            event = gateway.interface.events.ERC20Received;
                            return [4 /*yield*/, ethers_utils_1.getLogs(provider, {
                                    address: this.config.gateway.address,
                                    topics: [event.topic],
                                    fromBlock: fromBlock,
                                    toBlock: toBlock
                                })];
                        case 5:
                            logs = _a.sent();
                            return [2 /*return*/, logs
                                    .sort(function (l1, l2) { return (l2.blockNumber || 0) - (l1.blockNumber || 0); })
                                    .map(function (log) { return (__assign({ log: log }, event.decode(log.data))); })
                                    .filter(function (data) {
                                    return Address_1.default.createEthereumAddress(data.from || constants_1.ZERO_ADDRESS).equals(_this.getAddress()) &&
                                        Address_1.default.createEthereumAddress(data.contractAddress || constants_1.ZERO_ADDRESS).equals(asset.ethereumAddress);
                                })];
                    }
                });
            });
        };
        /**
         * Get a list of `ETHWithdrawn` logs.
         * Every time `withdrawETHAsync` is called, an `ETHWithdrawn` event is logged.
         *
         * @returns an array of `ETHWithdrawn`
         */
        this.getETHWithdrawnLogsAsync = function (fromBlock, toBlock) {
            if (fromBlock === void 0) { fromBlock = 0; }
            if (toBlock === void 0) { toBlock = 0; }
            return _this.getTokenWithdrawnLogsAsync(Address_1.default.createEthereumAddress(constants_1.ZERO_ADDRESS), fromBlock, toBlock);
        };
        /**
         * Get a list of `ERC20Withdrawn` logs.
         * Every time `withdrawERC20Async` is called, an `ERC20Withdrawn` event is logged.
         *
         * @returns an array of `ERC20Withdrawn`
         */
        this.getERC20WithdrawnLogsAsync = function (asset, fromBlock, toBlock) {
            if (fromBlock === void 0) { fromBlock = 0; }
            if (toBlock === void 0) { toBlock = 0; }
            return _this.getTokenWithdrawnLogsAsync(asset.ethereumAddress, fromBlock, toBlock);
        };
        /**
         * Get your nonce for withdrawal. It increments every time you execute a withdrawal.
         */
        this.getWithdrawalNonceAsync = function () { return __awaiter(_this, void 0, void 0, function () {
            var gateway;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        gateway = this.getGateway();
                        return [4 /*yield*/, gateway.nonces(this.getAddress().toLocalAddressString())];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getTokenWithdrawnLogsAsync = function (assetAddress, fromBlock, toBlock) {
            if (fromBlock === void 0) { fromBlock = 0; }
            if (toBlock === void 0) { toBlock = 0; }
            return __awaiter(_this, void 0, void 0, function () {
                var provider, gateway, transaction, blockNumber, event, logs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            provider = this.getProvider();
                            gateway = this.getGateway();
                            if (!(fromBlock === 0)) return [3 /*break*/, 2];
                            return [4 /*yield*/, provider.getTransaction(this.config.gateway.transactionHash)];
                        case 1:
                            transaction = _a.sent();
                            fromBlock = Number(transaction.blockNumber || 0);
                            _a.label = 2;
                        case 2:
                            if (!(toBlock === 0)) return [3 /*break*/, 4];
                            return [4 /*yield*/, provider.getBlockNumber()];
                        case 3:
                            blockNumber = _a.sent();
                            toBlock = Number(blockNumber);
                            _a.label = 4;
                        case 4:
                            event = gateway.interface.events.TokenWithdrawn;
                            return [4 /*yield*/, ethers_utils_1.getLogs(provider, {
                                    address: this.config.gateway.address,
                                    topics: [event.topic, event.encodeTopics([this.getAddress().toLocalAddressString()])],
                                    fromBlock: fromBlock,
                                    toBlock: toBlock
                                })];
                        case 5:
                            logs = _a.sent();
                            return [2 /*return*/, logs
                                    .sort(function (l1, l2) { return (l2.blockNumber || 0) - (l1.blockNumber || 0); })
                                    .map(function (log) { return (__assign({ log: log }, event.decode(log.data))); })
                                    .filter(function (data) { return Address_1.default.createEthereumAddress(data.contractAddress).equals(assetAddress); })];
                    }
                });
            });
        };
        this.config = EthereumConfig_1.default.create(testnet);
        this.privateKey = privateKey;
        this.init(privateKey);
    }
    EthereumChain.prototype.init = function (privateKey) {
        var _this = this;
        this.provider = new ethers_alice_1.ethers.providers.InfuraProvider(this.config.networkName);
        this.provider.on("end", function () { return _this.init(privateKey); });
        this.provider.on("error", function () { });
        this.wallet = new ethers_alice_1.ethers.Wallet(privateKey, this.provider);
        this.address = Address_1.default.createEthereumAddress(this.wallet.address);
    };
    return EthereumChain;
}());
exports.default = EthereumChain;

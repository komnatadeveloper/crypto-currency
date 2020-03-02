"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bn_js_1 = __importDefault(require("bn.js"));
var ethers_1 = require("ethers");
exports.toBigNumber = function (value) {
    if (bn_js_1.default.isBN(value)) {
        return new ethers_1.ethers.utils.BigNumber(value.toString());
    }
    else {
        return ethers_1.ethers.utils.bigNumberify(value);
    }
};

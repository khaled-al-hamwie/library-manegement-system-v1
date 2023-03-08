"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneO = exports.phone = void 0;
const express_validator_1 = require("express-validator");
const validationMessage_1 = __importDefault(require("../messages/validationMessage"));
function phone() {
    return [
        (0, express_validator_1.body)("phone_number")
            .trim()
            .isMobilePhone("any")
            .withMessage((value) => validationMessage_1.default.type("phone", value)),
    ];
}
exports.phone = phone;
function phoneO() {
    return [
        (0, express_validator_1.body)("phone_number")
            .optional()
            .trim()
            .isMobilePhone("any")
            .withMessage((value) => validationMessage_1.default.type("phone", value)),
    ];
}
exports.phoneO = phoneO;

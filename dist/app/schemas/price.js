"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.priceO = exports.price = void 0;
const express_validator_1 = require("express-validator");
const validationMessage_1 = __importDefault(require("../messages/validationMessage"));
function price(field) {
    return [
        (0, express_validator_1.body)(field)
            .trim()
            .notEmpty()
            .withMessage(validationMessage_1.default.empty(field))
            .bail()
            .isDecimal({ decimal_digits: "1,2" })
            .withMessage((value) => validationMessage_1.default.type("price", value))
            .bail()
            .custom((value) => {
            if (Number(value) < 0) {
                throw new Error(`the ${field} must be positive`);
            }
            return true;
        }),
    ];
}
exports.price = price;
function priceO(field) {
    return [
        (0, express_validator_1.body)(field)
            .optional({ checkFalsy: true })
            .trim()
            .isDecimal({ decimal_digits: "1,2" })
            .withMessage((value) => validationMessage_1.default.type("price", value))
            .bail()
            .custom((value) => {
            if (Number(value) < 0) {
                throw new Error(`the ${field} must be positive`);
            }
            return true;
        }),
    ];
}
exports.priceO = priceO;

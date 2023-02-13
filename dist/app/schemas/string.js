"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringO = exports.string = void 0;
const express_validator_1 = require("express-validator");
const validationMessage_1 = __importDefault(require("../messages/validationMessage"));
function string(title, isLong = false) {
    const longVlaidation = [
        (0, express_validator_1.body)(title)
            .trim()
            .isLength({ min: 3, max: 245 })
            .withMessage(validationMessage_1.default.outOfLength(title)),
    ];
    const smallValidation = [
        (0, express_validator_1.body)(title)
            .trim()
            .isLength({ min: 3, max: 45 })
            .withMessage(validationMessage_1.default.outOfLength(title)),
    ];
    return isLong ? longVlaidation : smallValidation;
}
exports.string = string;
function stringO(title, isLong = false) {
    const longVlaidation = [
        (0, express_validator_1.body)(title)
            .optional()
            .trim()
            .isLength({ min: 3, max: 245 })
            .withMessage(validationMessage_1.default.outOfLength(title)),
    ];
    const smallValidation = [
        (0, express_validator_1.body)(title)
            .optional()
            .trim()
            .isLength({ min: 3, max: 45 })
            .withMessage(validationMessage_1.default.outOfLength(title)),
    ];
    return isLong ? longVlaidation : smallValidation;
}
exports.stringO = stringO;

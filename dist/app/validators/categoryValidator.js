"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryUpdateValidate = exports.categoryCreateValidate = void 0;
const express_validator_1 = require("express-validator");
const validationMessage_1 = __importDefault(require("../messages/validationMessage"));
function categoryCreateValidate() {
    return [
        (0, express_validator_1.body)("name")
            .notEmpty()
            .withMessage(validationMessage_1.default.empty("name"))
            .bail()
            .trim()
            .isLength({ min: 3, max: 45 })
            .withMessage(validationMessage_1.default.outOfLength("name")),
        (0, express_validator_1.body)("description")
            .notEmpty()
            .withMessage(validationMessage_1.default.empty("description"))
            .bail()
            .trim()
            .isLength({ min: 3, max: 245 })
            .withMessage(validationMessage_1.default.outOfLength("description")),
    ];
}
exports.categoryCreateValidate = categoryCreateValidate;
function categoryUpdateValidate() {
    return [
        (0, express_validator_1.body)("name")
            .trim()
            .custom((value) => {
            if (value && (value.length < 3 || value.length > 45)) {
                throw new Error(validationMessage_1.default.outOfLength("name"));
            }
            return true;
        }),
        (0, express_validator_1.body)("description")
            .trim()
            .custom((value) => {
            if (value && (value.length < 3 || value.length > 245)) {
                throw new Error(validationMessage_1.default.outOfLength("name"));
            }
            return true;
        }),
    ];
}
exports.categoryUpdateValidate = categoryUpdateValidate;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailL = exports.email = void 0;
const express_validator_1 = require("express-validator");
const validationMessage_1 = __importDefault(require("../messages/validationMessage"));
const credential_1 = require("../models/credential");
function email() {
    return [
        (0, express_validator_1.body)("email")
            .trim()
            .isEmail({ allow_ip_domain: false, allow_utf8_local_part: false })
            .withMessage((value) => validationMessage_1.default.type("email", value))
            .bail()
            .custom((value, { req, location, path }) => {
            return credential_1.Credential.findOne({
                where: { email: value },
            }).then((email) => {
                if (email) {
                    return Promise.reject("you can't use this email");
                }
            });
        }),
    ];
}
exports.email = email;
//check if email exists
function emailL() {
    return [
        (0, express_validator_1.body)("email")
            .trim()
            .isEmail({ allow_ip_domain: false, allow_utf8_local_part: false })
            .withMessage((value) => validationMessage_1.default.type("email", value)),
    ];
}
exports.emailL = emailL;

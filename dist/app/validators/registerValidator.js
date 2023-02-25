"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerValidator = void 0;
const boolean_1 = require("../schemas/boolean");
const email_1 = require("../schemas/email");
const password_1 = require("../schemas/password");
const phone_1 = require("../schemas/phone");
const string_1 = require("../schemas/string");
// register phone number all required isAdmin
function registerValidator() {
    return [
        ...(0, email_1.email)(),
        ...(0, password_1.password)(),
        ...(0, string_1.string)("first_name"),
        ...(0, string_1.string)("last_name"),
        ...(0, string_1.string)("address"),
        ...(0, phone_1.phone)(),
        ...(0, boolean_1.boolean)(),
    ];
}
exports.registerValidator = registerValidator;
// login email password

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readerValidator = void 0;
const phone_1 = require("../schemas/phone");
const string_1 = require("../schemas/string");
function readerValidator() {
    const validation = [
        ...(0, string_1.stringO)("first_name"),
        ...(0, string_1.stringO)("last_name"),
        ...(0, string_1.stringO)("address"),
        ...(0, phone_1.phoneO)(),
    ];
    return validation;
}
exports.readerValidator = readerValidator;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.issueValidator = void 0;
const string_1 = require("../schemas/string");
function issueValidator(acceptOptional = false) {
    const optionalValidation = [
        ...(0, string_1.stringO)("type"),
        ...(0, string_1.stringO)("description", true),
    ];
    const nonOptionalValidation = [
        ...(0, string_1.string)("type"),
        ...(0, string_1.stringO)("description", true),
    ];
    return acceptOptional ? optionalValidation : nonOptionalValidation;
}
exports.issueValidator = issueValidator;

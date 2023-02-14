"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusValidator = void 0;
const string_1 = require("../schemas/string");
function statusValidator(acceptOptional = false) {
    const optionalValidation = [...(0, string_1.stringO)("name")];
    const nonOptionalValidation = [...(0, string_1.string)("name")];
    return acceptOptional ? optionalValidation : nonOptionalValidation;
}
exports.statusValidator = statusValidator;

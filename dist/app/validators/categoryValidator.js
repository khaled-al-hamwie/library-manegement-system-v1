"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryValidator = void 0;
const string_1 = require("../schemas/string");
function categoryValidator(acceptOptional = false) {
    const optionalValidation = [
        ...(0, string_1.stringO)("name"),
        ...(0, string_1.stringO)("description", true),
    ];
    const nonOptionalValidation = [
        ...(0, string_1.string)("name"),
        ...(0, string_1.string)("description", true),
    ];
    return acceptOptional ? optionalValidation : nonOptionalValidation;
}
exports.categoryValidator = categoryValidator;

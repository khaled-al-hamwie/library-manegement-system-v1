"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorValidator = void 0;
const dateOnly_1 = require("../schemas/dateOnly");
const string_1 = require("../schemas/string");
function authorValidator(acceptOptional = false) {
    const optionalValidation = [
        ...(0, string_1.stringO)("name"),
        ...(0, string_1.stringO)("description", true),
        ...(0, dateOnly_1.dateOnlyO)("born"),
    ];
    const nonOptionalValidation = [
        ...(0, string_1.string)("name"),
        ...(0, string_1.stringO)("description", true),
        ...(0, dateOnly_1.dateOnlyO)("born"),
    ];
    return acceptOptional ? optionalValidation : nonOptionalValidation;
}
exports.authorValidator = authorValidator;

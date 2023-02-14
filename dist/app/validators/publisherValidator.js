"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publisherValidator = void 0;
const dateOnly_1 = require("../schemas/dateOnly");
const string_1 = require("../schemas/string");
function publisherValidator(acceptOptional = false) {
    const optionalValidation = [
        ...(0, string_1.stringO)("name"),
        ...(0, dateOnly_1.dateOnlyO)("publishing_date"),
    ];
    const nonOptionalValidation = [
        ...(0, string_1.string)("name"),
        ...(0, dateOnly_1.dateOnly)("publishing_date"),
    ];
    return acceptOptional ? optionalValidation : nonOptionalValidation;
}
exports.publisherValidator = publisherValidator;

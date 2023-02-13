"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorValidatorU = exports.authorValidatorC = void 0;
const born_1 = require("../schemas/born");
const string_1 = require("../schemas/string");
function authorValidatorC() {
    return [...(0, string_1.string)("name"), ...(0, string_1.string)("description"), ...born_1.born];
}
exports.authorValidatorC = authorValidatorC;
function authorValidatorU() {
    return [...(0, string_1.stringO)("name"), ...(0, string_1.stringO)("descriptionO", true), ...born_1.bornO];
}
exports.authorValidatorU = authorValidatorU;

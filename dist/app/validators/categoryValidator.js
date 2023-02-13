"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryValidatorU = exports.categoryValidatorC = void 0;
const string_1 = require("../schemas/string");
function categoryValidatorC() {
    return [...(0, string_1.string)("name"), ...(0, string_1.string)("description", true)];
}
exports.categoryValidatorC = categoryValidatorC;
function categoryValidatorU() {
    return [...(0, string_1.stringO)("name"), ...(0, string_1.stringO)("description", true)];
}
exports.categoryValidatorU = categoryValidatorU;

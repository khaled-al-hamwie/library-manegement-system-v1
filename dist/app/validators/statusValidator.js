"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusValidatorU = exports.statusValidatorC = void 0;
const string_1 = require("../schemas/string");
function statusValidatorC() {
    return [...(0, string_1.string)("name")];
}
exports.statusValidatorC = statusValidatorC;
function statusValidatorU() {
    return [...(0, string_1.stringO)("name")];
}
exports.statusValidatorU = statusValidatorU;

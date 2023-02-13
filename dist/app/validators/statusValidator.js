"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusValidatorU = exports.statusValidatorC = void 0;
const name_1 = require("../schemas/name");
function statusValidatorC() {
    return [...name_1.name];
}
exports.statusValidatorC = statusValidatorC;
function statusValidatorU() {
    return [...name_1.nameO];
}
exports.statusValidatorU = statusValidatorU;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorValidatorU = exports.authorValidatorC = void 0;
const born_1 = require("../schemas/born");
const description_1 = require("../schemas/description");
const name_1 = require("../schemas/name");
function authorValidatorC() {
    return [...name_1.name, ...description_1.description, ...born_1.born];
}
exports.authorValidatorC = authorValidatorC;
function authorValidatorU() {
    return [...name_1.nameO, ...description_1.descriptionO, ...born_1.bornO];
}
exports.authorValidatorU = authorValidatorU;

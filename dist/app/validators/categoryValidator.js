"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryValidatorU = exports.categoryValidatorC = void 0;
const description_1 = require("../schemas/description");
const name_1 = require("../schemas/name");
function categoryValidatorC() {
    return [...name_1.name, ...description_1.description];
}
exports.categoryValidatorC = categoryValidatorC;
function categoryValidatorU() {
    return [...name_1.nameO, ...description_1.descriptionO];
}
exports.categoryValidatorU = categoryValidatorU;

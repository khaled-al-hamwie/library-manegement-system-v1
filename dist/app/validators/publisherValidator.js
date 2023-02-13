"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publisherValidatorU = exports.publisherValidatorC = void 0;
const name_1 = require("../schemas/name");
const year_of_publish_1 = require("../schemas/year_of_publish");
function publisherValidatorC() {
    return [...name_1.name, ...year_of_publish_1.year_of_publish];
}
exports.publisherValidatorC = publisherValidatorC;
function publisherValidatorU() {
    return [...name_1.nameO, ...year_of_publish_1.year_of_publishO];
}
exports.publisherValidatorU = publisherValidatorU;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publisherValidatorU = exports.publisherValidatorC = void 0;
const string_1 = require("../schemas/string");
const year_of_publish_1 = require("../schemas/year_of_publish");
function publisherValidatorC() {
    return [...(0, string_1.string)("name"), ...year_of_publish_1.year_of_publish];
}
exports.publisherValidatorC = publisherValidatorC;
function publisherValidatorU() {
    return [...(0, string_1.stringO)("name"), ...year_of_publish_1.year_of_publishO];
}
exports.publisherValidatorU = publisherValidatorU;

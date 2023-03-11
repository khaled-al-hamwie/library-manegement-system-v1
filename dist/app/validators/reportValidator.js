"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportValidator = void 0;
const forignKey_1 = require("../schemas/forignKey");
const string_1 = require("../schemas/string");
function reportValidator() {
    return [
        ...(0, forignKey_1.forignKey)("book_id"),
        ...(0, forignKey_1.forignKey)("reader_id"),
        ...(0, forignKey_1.forignKey)("issue_id"),
        ...(0, forignKey_1.forignKeyO)("reservation_id"),
        ...(0, forignKey_1.forignKeyO)("payment_id"),
        ...(0, string_1.string)("report", true),
    ];
}
exports.reportValidator = reportValidator;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentValidator = void 0;
const forignKey_1 = require("../schemas/forignKey");
function paymentValidator() {
    return [...(0, forignKey_1.forignKey)("book_id"), ...(0, forignKey_1.forignKey)("reader_id")];
}
exports.paymentValidator = paymentValidator;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookValidator = void 0;
const forignKey_1 = require("../schemas/forignKey");
const price_1 = require("../schemas/price");
const query_1 = require("../schemas/query");
const string_1 = require("../schemas/string");
function bookValidator(type = "get") {
    if (type == "create")
        return [
            ...(0, forignKey_1.forignKey)("category_id"),
            ...(0, forignKey_1.forignKey)("author_id"),
            ...(0, forignKey_1.forignKey)("publisher_id"),
            ...(0, forignKey_1.forignKey)("status_id"),
            ...(0, string_1.string)("title"),
            ...(0, string_1.string)("description"),
            ...(0, string_1.stringO)("edition"),
            ...(0, price_1.price)("price"),
            ...(0, price_1.price)("reservation_price"),
        ];
    if (type == "update")
        return [
            ...(0, forignKey_1.forignKeyO)("category_id"),
            ...(0, forignKey_1.forignKeyO)("author_id"),
            ...(0, forignKey_1.forignKeyO)("publisher_id"),
            ...(0, forignKey_1.forignKeyO)("status_id"),
            ...(0, string_1.string)("title"),
            ...(0, string_1.string)("description"),
            ...(0, string_1.stringO)("edition"),
            ...(0, price_1.priceO)("price"),
            ...(0, price_1.priceO)("reservation_price"),
        ];
    return [...(0, query_1.isQuery)("title"), ...(0, query_1.isQuery)("author"), ...(0, query_1.isQuery)("category")];
}
exports.bookValidator = bookValidator;

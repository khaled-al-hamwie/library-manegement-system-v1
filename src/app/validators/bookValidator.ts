import { ValidationChain } from "express-validator";
import { forignKey, forignKeyO } from "../schemas/forignKey";
import { price, priceO } from "../schemas/price";
import { isQuery } from "../schemas/query";
import { string, stringO } from "../schemas/string";
type bookValidationOption = "create" | "update" | "get";
export function bookValidator(
    type: bookValidationOption = "get"
): ValidationChain[] {
    if (type == "create")
        return [
            ...string("title"),
            ...string("description"),
            ...stringO("edition"),
            ...price("price"),
            ...price("reservation_daily_value"),
            ...forignKey("category_id"),
            ...forignKey("author_id"),
            ...forignKey("publisher_id"),
            ...forignKey("status_id"),
        ];
    if (type == "update")
        return [
            ...string("title"),
            ...string("description"),
            ...stringO("edition"),
            ...priceO("price"),
            ...priceO("reservation_daily_value"),
            ...forignKeyO("category_id"),
            ...forignKeyO("author_id"),
            ...forignKeyO("publisher_id"),
            ...forignKeyO("status_id"),
        ];
    return [...isQuery("title"), ...isQuery("author"), ...isQuery("category")];
}

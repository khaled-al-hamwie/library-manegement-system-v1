import { ValidationChain } from "express-validator";
import { forignKey, forignKeyO } from "../schemas/forignKey";
import { image } from "../schemas/image";
import { price, priceO } from "../schemas/price";
import { isQuery } from "../schemas/query";
import { string, stringO } from "../schemas/string";
type bookValidationOption = "create" | "update" | "get";
export function bookValidator(
    type: bookValidationOption = "get"
): ValidationChain[] {
    if (type == "create")
        return [
            ...forignKey("category_id"),
            ...forignKey("author_id"),
            ...forignKey("publisher_id"),
            ...forignKey("status_id"),
            ...string("title"),
            ...string("description"),
            ...stringO("edition"),
            ...price("price"),
            ...price("reservation_price"),
        ];
    if (type == "update")
        return [
            ...forignKeyO("category_id"),
            ...forignKeyO("author_id"),
            ...forignKeyO("publisher_id"),
            ...forignKeyO("status_id"),
            ...string("title"),
            ...string("description"),
            ...stringO("edition"),
            ...priceO("price"),
            ...priceO("reservation_price"),
        ];
    return [...isQuery("title"), ...isQuery("author"), ...isQuery("category")];
}

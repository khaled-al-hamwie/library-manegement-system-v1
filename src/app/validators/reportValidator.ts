import { ValidationChain } from "express-validator";
import { forignKey, forignKeyO } from "../schemas/forignKey";
import { string } from "../schemas/string";

export function reportValidator(): ValidationChain[] {
    return [
        ...forignKey("book_id"),
        ...forignKey("reader_id"),
        ...forignKey("issue_id"),
        ...forignKeyO("reservation_id"),
        ...forignKeyO("payment_id"),
        ...string("report", true),
    ];
}

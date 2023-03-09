import { body, ValidationChain } from "express-validator";
import validationMessage from "../messages/validationMessage";
import { forignKey } from "../schemas/forignKey";

export function paymentValidator(): ValidationChain[] {
    return [...forignKey("book_id"), ...forignKey("reader_id")];
}

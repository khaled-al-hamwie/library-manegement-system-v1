import { body, ValidationChain } from "express-validator";
import validationMessage from "../messages/validationMessage";

type dateOnlyField = "born" | "publishing_date";
export function dateOnly(title: dateOnlyField): ValidationChain[] {
    return [body(title).isDate().withMessage(validationMessage.type("date"))];
}
export function dateOnlyO(title: dateOnlyField): ValidationChain[] {
    return [body(title).isDate().withMessage(validationMessage.type("date"))];
}

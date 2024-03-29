import { body, ValidationChain } from "express-validator";
import validationMessage from "../messages/validationMessage";

type dateOnlyField = "born" | "publishing_date" | "return_date";
export function dateOnly(title: dateOnlyField): ValidationChain[] {
    return [
        body(title)
            .notEmpty()
            .withMessage(validationMessage.empty(title))
            .bail()
            .isDate()
            .withMessage((value) => validationMessage.type("date", value)),
    ];
}
export function dateOnlyO(title: dateOnlyField): ValidationChain[] {
    return [
        body(title)
            .optional()
            .isDate()
            .withMessage((value) => validationMessage.type("date", value)),
    ];
}

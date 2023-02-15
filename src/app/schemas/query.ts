import { query, ValidationChain } from "express-validator";
import validationMessage from "../messages/validationMessage";

type queryType = "category" | "author" | "title";
export function isQuery(title: queryType): ValidationChain[] {
    return [
        query(title)
            .optional()
            .trim()
            .isString()
            .withMessage((value) => validationMessage.type("string", value))
            .isLength({ min: 3, max: 45 })
            .withMessage(validationMessage.outOfLength(title)),
    ];
}

import { body, ValidationChain } from "express-validator";
import validationMessage from "../messages/validationMessage";

type stringField =
    | "name"
    | "description"
    | "title"
    | "edition"
    | "type"
    | "last_name"
    | "first_name"
    | "address"
    | "report";
export function string(
    title: stringField,
    isLong: boolean = false
): ValidationChain[] {
    const longVlaidation: ValidationChain[] = [
        body(title)
            .trim()
            .isLength({ min: 3, max: 245 })
            .withMessage(validationMessage.outOfLength(title)),
    ];

    const smallValidation: ValidationChain[] = [
        body(title)
            .trim()
            .isLength({ min: 3, max: 45 })
            .withMessage(validationMessage.outOfLength(title)),
    ];
    return isLong ? longVlaidation : smallValidation;
}
export function stringO(
    title: stringField,
    isLong: boolean = false
): ValidationChain[] {
    const longVlaidation: ValidationChain[] = [
        body(title)
            .optional()
            .trim()
            .isLength({ min: 3, max: 245 })
            .withMessage(validationMessage.outOfLength(title)),
    ];

    const smallValidation: ValidationChain[] = [
        body(title)
            .optional()
            .trim()
            .isLength({ min: 3, max: 45 })
            .withMessage(validationMessage.outOfLength(title)),
    ];
    return isLong ? longVlaidation : smallValidation;
}

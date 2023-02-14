import { ValidationChain } from "express-validator";
import { dateOnly, dateOnlyO } from "../schemas/dateOnly";
import { string, stringO } from "../schemas/string";

export function authorValidator(
    acceptOptional: boolean = false
): ValidationChain[] {
    const optionalValidation: ValidationChain[] = [
        ...stringO("name"),
        ...stringO("description", true),
        ...dateOnlyO("born"),
    ];
    const nonOptionalValidation: ValidationChain[] = [
        ...string("name"),
        ...string("description"),
        ...dateOnly("born"),
    ];
    return acceptOptional ? optionalValidation : nonOptionalValidation;
}

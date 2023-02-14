import { ValidationChain } from "express-validator";
import { dateOnly, dateOnlyO } from "../schemas/dateOnly";
import { string, stringO } from "../schemas/string";

export function publisherValidator(
    acceptOptional: boolean = false
): ValidationChain[] {
    const optionalValidation: ValidationChain[] = [
        ...stringO("name"),
        ...dateOnlyO("publishing_date"),
    ];
    const nonOptionalValidation: ValidationChain[] = [
        ...string("name"),
        ...dateOnly("publishing_date"),
    ];
    return acceptOptional ? optionalValidation : nonOptionalValidation;
}

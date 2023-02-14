import { ValidationChain } from "express-validator";
import { string, stringO } from "../schemas/string";

export function categoryValidator(
    acceptOptional: boolean = false
): ValidationChain[] {
    const optionalValidation: ValidationChain[] = [
        ...stringO("name"),
        ...stringO("description", true),
    ];
    const nonOptionalValidation: ValidationChain[] = [
        ...string("name"),
        ...string("description", true),
    ];
    return acceptOptional ? optionalValidation : nonOptionalValidation;
}

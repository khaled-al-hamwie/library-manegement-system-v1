import { ValidationChain } from "express-validator";
import { string, stringO } from "../schemas/string";

export function issueValidator(
    acceptOptional: boolean = false
): ValidationChain[] {
    const optionalValidation: ValidationChain[] = [
        ...stringO("type"),
        ...stringO("description", true),
    ];
    const nonOptionalValidation: ValidationChain[] = [
        ...string("type"),
        ...stringO("description", true),
    ];
    return acceptOptional ? optionalValidation : nonOptionalValidation;
}

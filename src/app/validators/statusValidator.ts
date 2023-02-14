import { ValidationChain } from "express-validator";
import { string, stringO } from "../schemas/string";

export function statusValidator(
    acceptOptional: boolean = false
): ValidationChain[] {
    const optionalValidation: ValidationChain[] = [...stringO("name")];
    const nonOptionalValidation: ValidationChain[] = [...string("name")];
    return acceptOptional ? optionalValidation : nonOptionalValidation;
}

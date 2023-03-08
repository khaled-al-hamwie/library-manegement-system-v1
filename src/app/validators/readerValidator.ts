import { ValidationChain } from "express-validator";
import { phoneO } from "../schemas/phone";
import { stringO } from "../schemas/string";

export function readerValidator(): ValidationChain[] {
    const validation: ValidationChain[] = [
        ...stringO("first_name"),
        ...stringO("last_name"),
        ...stringO("address"),
        ...phoneO(),
    ];
    return validation;
}

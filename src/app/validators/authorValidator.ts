import { born, bornO } from "../schemas/born";
import { description, descriptionO } from "../schemas/description";
import { name, nameO } from "../schemas/name";

export function authorValidatorC() {
    return [...name, ...description, ...born];
}

export function authorValidatorU() {
    return [...nameO, ...descriptionO, ...bornO];
}

import { description, descriptionO } from "../schemas/description";
import { name, nameO } from "../schemas/name";

export function categoryValidatorC() {
    return [...name, ...description];
}

export function categoryValidatorU() {
    return [...nameO, ...descriptionO];
}

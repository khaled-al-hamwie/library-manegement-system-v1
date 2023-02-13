import { born, bornO } from "../schemas/born";
import { string, stringO } from "../schemas/string";

export function authorValidatorC() {
    return [...string("name"), ...string("description"), ...born];
}

export function authorValidatorU() {
    return [...stringO("name"), ...stringO("descriptionO", true), ...bornO];
}

import { string, stringO } from "../schemas/string";

export function categoryValidatorC() {
    return [...string("name"), ...string("description", true)];
}

export function categoryValidatorU() {
    return [...stringO("name"), ...stringO("description", true)];
}

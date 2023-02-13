import { string, stringO } from "../schemas/string";

export function statusValidatorC() {
    return [...string("name")];
}

export function statusValidatorU() {
    return [...stringO("name")];
}

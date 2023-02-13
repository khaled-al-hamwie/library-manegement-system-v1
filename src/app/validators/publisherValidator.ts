import { string, stringO } from "../schemas/string";
import { year_of_publish, year_of_publishO } from "../schemas/year_of_publish";

export function publisherValidatorC() {
    return [...string("name"), ...year_of_publish];
}

export function publisherValidatorU() {
    return [...stringO("name"), ...year_of_publishO];
}

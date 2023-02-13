import { name, nameO } from "../schemas/name";
import { year_of_publish, year_of_publishO } from "../schemas/year_of_publish";

export function publisherValidatorC() {
    return [...name, ...year_of_publish];
}

export function publisherValidatorU() {
    return [...nameO, ...year_of_publishO];
}

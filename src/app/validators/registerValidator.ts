import { ValidationChain } from "express-validator";
import { boolean } from "../schemas/boolean";
import { email, emailL } from "../schemas/email";
import { password } from "../schemas/password";
import { phone } from "../schemas/phone";
import { string, stringO } from "../schemas/string";

// register phone number all required isAdmin
export function registerValidator(): ValidationChain[] {
    return [
        ...email(),
        ...password(true),
        ...string("first_name"),
        ...string("last_name"),
        ...string("address"),
        ...phone(),
        ...boolean(),
    ];
}
// login email password
export function loginValidator(): ValidationChain[] {
    return [...emailL(), ...password(false)];
}

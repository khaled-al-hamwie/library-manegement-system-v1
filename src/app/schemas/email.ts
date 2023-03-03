import { body, ValidationChain } from "express-validator";
import validationMessage from "../messages/validationMessage";
import { Credential } from "../models/credential";

export function email(): ValidationChain[] {
    return [
        body("email")
            .trim()
            .isEmail({ allow_ip_domain: false, allow_utf8_local_part: false })
            .withMessage((value) => validationMessage.type("email", value))
            .bail()
            .custom((value, { req, location, path }) => {
                return Credential.findOne({
                    where: { email: value },
                }).then((email) => {
                    if (email) {
                        return Promise.reject("you can't use this email");
                    }
                });
            }),
    ];
}
//check if email exists
export function emailL(): ValidationChain[] {
    return [
        body("email")
            .trim()
            .isEmail({ allow_ip_domain: false, allow_utf8_local_part: false })
            .withMessage((value) => validationMessage.type("email", value)),
    ];
}

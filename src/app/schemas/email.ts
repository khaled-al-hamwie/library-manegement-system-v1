import { body, ValidationChain } from "express-validator";
import validationMessage from "../messages/validationMessage";

export function email(): ValidationChain[] {
    return [
        body("email")
            .trim()
            .isEmail({ allow_ip_domain: false, allow_utf8_local_part: false })
            .withMessage((value) => validationMessage.type("email", value)),
    ];
}

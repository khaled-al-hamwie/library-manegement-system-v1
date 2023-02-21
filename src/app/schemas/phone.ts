import { body, ValidationChain } from "express-validator";
import validationMessage from "../messages/validationMessage";

export function phone(): ValidationChain[] {
    return [
        body("phone_number")
            .trim()
            .isMobilePhone("any")
            .withMessage((value) => validationMessage.type("email", value)),
    ];
}

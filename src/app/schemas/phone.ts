import { body, ValidationChain } from "express-validator";
import validationMessage from "../messages/validationMessage";

export function phone(): ValidationChain[] {
    return [
        body("phone_number")
            .trim()
            .isMobilePhone("any")
            .withMessage((value) => validationMessage.type("phone", value)),
    ];
}
export function phoneO(): ValidationChain[] {
    return [
        body("phone_number")
            .optional()
            .trim()
            .isMobilePhone("any")
            .withMessage((value) => validationMessage.type("phone", value)),
    ];
}

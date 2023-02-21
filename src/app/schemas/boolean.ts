import { body, ValidationChain } from "express-validator";
import validationMessage from "../messages/validationMessage";

export function boolean(): ValidationChain[] {
    return [
        body("isAdmin")
            .optional()
            .isBoolean()
            .withMessage((value) => validationMessage.type("boolean", value)),
    ];
}

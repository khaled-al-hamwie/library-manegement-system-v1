import { body, ValidationChain } from "express-validator";
import validationMessage from "../messages/validationMessage";

export function password(): ValidationChain[] {
    return [
        body("password")
            .trim()
            .isLength({ min: 20, max: 50 })
            .withMessage(validationMessage.outOfLength("password")),
        body("confirm_password")
            .trim()
            .custom((input, { req, location, path }) => {
                if (input !== req.body.password) {
                    throw new Error(`the password must match`);
                }
                return true;
            }),
    ];
}

import { body } from "express-validator";
import validationMessage from "../messages/validationMessage";
export const born = [
    body("born").isDate().withMessage(validationMessage.type("date")),
];
export const bornO = [
    body("born")
        .optional()
        .isDate()
        .withMessage(validationMessage.type("date")),
];

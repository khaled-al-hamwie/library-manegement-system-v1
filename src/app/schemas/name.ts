import { body } from "express-validator";
import validationMessage from "../messages/validationMessage";
export const name = [
    body("name")
        .trim()
        .isLength({ min: 3, max: 45 })
        .withMessage(validationMessage.outOfLength("name")),
];

export const nameO = [
    body("name")
        .optional()
        .trim()
        .isLength({ min: 3, max: 45 })
        .withMessage(validationMessage.outOfLength("name")),
];

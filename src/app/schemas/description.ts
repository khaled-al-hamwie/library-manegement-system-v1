import { body } from "express-validator";
import validationMessage from "../messages/validationMessage";
export const description = [
    body("description")
        .trim()
        .isLength({ min: 3, max: 245 })
        .withMessage(validationMessage.outOfLength("description")),
];

export const descriptionO = [
    body("description")
        .optional()
        .trim()
        .isLength({ min: 3, max: 245 })
        .withMessage(validationMessage.outOfLength("description")),
];

import { body } from "express-validator";
import { isDate } from "util/types";
import validationMessage from "../messages/validationMessage";
export const year_of_publish = [
    body("year_of_publish")
        .isDate()
        .withMessage(validationMessage.type("date")),
];

export const year_of_publishO = [
    body("year_of_publish")
        .optional()
        .isDate()
        .withMessage(validationMessage.type("date")),
];

import { param } from "express-validator";
import validationMessage from "../messages/validationMessage";

export const id = [
    param("id").isNumeric().withMessage(validationMessage.type("number")),
];

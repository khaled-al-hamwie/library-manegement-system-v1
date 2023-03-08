import { body, ValidationChain } from "express-validator";
import validationMessage from "../messages/validationMessage";
import { dateOnly } from "../schemas/dateOnly";
import { forignKey } from "../schemas/forignKey";

export function reservationValidator(): ValidationChain[] {
    return [
        ...forignKey("book_id"),
        ...forignKey("reader_id"),
        body("day")
            .notEmpty()
            .withMessage(validationMessage.empty("day"))
            .bail()
            .isInt({ min: 0, max: 60 })
            .withMessage(validationMessage.type("day", "of day")),
    ];
}

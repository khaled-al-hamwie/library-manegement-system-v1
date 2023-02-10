import { body, param, query } from "express-validator";
import validationMessage from "../messages/validationMessage";

export function categoryCreateValidate() {
    return [
        body("name")
            .notEmpty()
            .withMessage(validationMessage.empty("name"))
            .bail()
            .trim()
            .isLength({ min: 3, max: 45 })
            .withMessage(validationMessage.outOfLength("name")),
        body("description")
            .notEmpty()
            .withMessage(validationMessage.empty("description"))
            .bail()
            .trim()
            .isLength({ min: 3, max: 245 })
            .withMessage(validationMessage.outOfLength("description")),
    ];
}

export function categoryUpdateValidate() {
    return [
        body("name")
            .trim()
            .custom((value) => {
                if (value && (value.length < 3 || value.length > 45)) {
                    throw new Error(validationMessage.outOfLength("name"));
                }
                return true;
            }),
        body("description")
            .trim()
            .custom((value) => {
                if (value && (value.length < 3 || value.length > 245)) {
                    throw new Error(validationMessage.outOfLength("name"));
                }
                return true;
            }),
    ];
}

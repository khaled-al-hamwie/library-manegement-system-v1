import { body, ValidationChain } from "express-validator";
import validationMessage from "../messages/validationMessage";

type priceType = "price" | "reservation_price";
export function price(field: priceType): ValidationChain[] {
    return [
        body(field)
            .trim()
            .notEmpty()
            .withMessage(validationMessage.empty(field))
            .bail()
            .isDecimal({ decimal_digits: "1,2" })
            .withMessage((value) => validationMessage.type("price", value))
            .bail()
            .custom((value) => {
                if (Number(value) < 0) {
                    throw new Error(`the ${field} must be positive`);
                }
                return true;
            }),
    ];
}
export function priceO(field: priceType): ValidationChain[] {
    return [
        body(field)
            .optional({ checkFalsy: true })
            .trim()
            .isDecimal({ decimal_digits: "1,2" })
            .withMessage((value) => validationMessage.type("price", value))
            .bail()
            .custom((value) => {
                if (Number(value) < 0) {
                    throw new Error(`the ${field} must be positive`);
                }
                return true;
            }),
    ];
}

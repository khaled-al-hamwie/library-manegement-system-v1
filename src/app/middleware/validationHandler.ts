import { NextFunction, Request, Response } from "express";
import {
    ErrorFormatter,
    Result,
    ValidationError,
    validationResult,
} from "express-validator";
import HttpResponse from "../traits/responses";

const errorFormatter = ({
    location,
    msg,
    param,
    value,
    nestedErrors,
}: ValidationError) => {
    return { field: param, error: msg };
};
export function validationHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const errors = validationResult(req).formatWith(errorFormatter);
    if (req.body.imageError === undefined) req.body.imageError = [];
    if (!errors.isEmpty() || req.body.imageError.length > 0) {
        return HttpResponse.validation(res, [
            ...errors.array(),
            ...req.body.imageError,
        ]);
    }
    next();
}

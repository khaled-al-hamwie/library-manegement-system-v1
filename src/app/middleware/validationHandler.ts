import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import HttpResponse from "../traits/responses";

export function validationHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return HttpResponse.validation(res, errors.array());
    }
    next();
}

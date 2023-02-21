import { NextFunction, Request, Response } from "express";

export function errorHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (err.name == "SyntaxError") {
        return res.status(400).json({ message: err.name, errors: err.message });
    }
    res.status(400).json({ err: err });
}

import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import HttpResponse from "../traits/responses";

export function adminMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        verify(token, process.env.JWT_SECRET!, function (err, decoded: any) {
            if (err) return HttpResponse.Unauthorized(res);
            if (decoded && decoded.isAdmin) next();
            else return HttpResponse.Unauthorized(res);
        });
    } else return HttpResponse.Unauthorized(res);
}
export function userMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        verify(token, process.env.JWT_SECRET!, function (err, decoded: any) {
            if (err) return HttpResponse.Unauthorized(res);
            if (decoded && !decoded.isAdmin) next(); // bar
        });
    } else return HttpResponse.Unauthorized(res);
}

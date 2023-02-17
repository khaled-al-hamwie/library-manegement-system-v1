import { NextFunction, Request, Response } from "express";
import {
    body,
    buildCheckFunction,
    check,
    ValidationChain,
} from "express-validator";
import validationMessage from "../messages/validationMessage";

// mime type
// size
// { field: "image", error: req.body.imageError },
const imageType = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
export function image(req: Request, res: Response, next: NextFunction) {
    console.log(req.file);
    req.body.imageError = [];
    if (req.file) {
        if (!imageType.includes(req.file.mimetype)) {
            req.body.imageError.push({
                field: "image",
                error: validationMessage.type(
                    `image such as ${imageType.map(
                        (image) => image.split("/")[1]
                    )}`,
                    req.file.originalname
                ),
            });
        }
        if (req.file.size > 1e7)
            req.body.imageError.push({
                field: "image",
                error: validationMessage.size("image", "10 MB"),
            });
    }
    next();
}

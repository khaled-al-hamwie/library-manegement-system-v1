import { NextFunction, Request, response, Response } from "express";
import validator from "validator";
import validationMessage from "../messages/validationMessage";
const imageType = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
export function image(req: Request, res: Response, next: NextFunction) {
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
    // if (req.body.image) {
    //     if (!validator.isLength(req.body.image, { max: 245, min: 5 }))
    //         req.body.imageError.push({
    //             field: "image",
    //             error: validationMessage.size("image or url", req.body.image),
    //         });
    //     if (!validator.isURL(req.body.image))
    //         req.body.imageError.push({
    //             field: "image",
    //             error: validationMessage.type("image or url", req.body.image),
    //         });
    //     // else {
    //     // fetch(req.body.image)
    //     //     .then((response) => console.log(response.headers))
    //     //     .catch((err) => res.json({ err }));
    //     // }
    // }
    next();
}

import { NextFunction, Request, Response, response } from "express";
import { ValidationError, validationResult } from "express-validator";
import multer from "multer";
import validationMessage from "../messages/validationMessage";
import HttpResponse from "../traits/responses";

const storage: multer.StorageEngine = multer.diskStorage({
    destination: "images",
    filename(req, file, callback) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        callback(null, uniqueSuffix + "-" + file.originalname);
    },
});

const limits = {
    fileSize: 1e6,
};
const imageType = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export function imageUploader(req: Request, res: Response, next: NextFunction) {
    const uploader = multer({
        storage,
        limits,
        fileFilter(req, file, callback) {
            if (!imageType.includes(file.mimetype)) {
                req.body.imageError = validationMessage.type(
                    `image such as ${imageType.map(
                        (image) => image.split("/")[1]
                    )}`,
                    file.originalname
                );
                callback(
                    new Error(
                        validationMessage.type(
                            `image such as ${imageType.map(
                                (image) => image.split("/")[1]
                            )}`,
                            file.originalname
                        )
                    )
                );
            } else callback(null, true);
        },
    }).single("image");
    return uploader(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            req.body.imageError = err.message;
        }
        next();
    });
}

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.image = void 0;
const validationMessage_1 = __importDefault(require("../messages/validationMessage"));
const imageType = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
function image(req, res, next) {
    req.body.imageError = [];
    if (req.file) {
        if (!imageType.includes(req.file.mimetype)) {
            req.body.imageError.push({
                field: "image",
                error: validationMessage_1.default.type(`image such as ${imageType.map((image) => image.split("/")[1])}`, req.file.originalname),
            });
        }
        if (req.file.size > 1e7)
            req.body.imageError.push({
                field: "image",
                error: validationMessage_1.default.size("image", "10 MB"),
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
exports.image = image;

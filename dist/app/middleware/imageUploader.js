"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageUploader = void 0;
const multer_1 = __importDefault(require("multer"));
const validationMessage_1 = __importDefault(require("../messages/validationMessage"));
const storage = multer_1.default.diskStorage({
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
function imageUploader(req, res, next) {
    const uploader = (0, multer_1.default)({
        storage,
        limits,
        fileFilter(req, file, callback) {
            if (!imageType.includes(file.mimetype)) {
                req.body.imageError = validationMessage_1.default.type(`image such as ${imageType.map((image) => image.split("/")[1])}`, file.originalname);
                callback(new Error(validationMessage_1.default.type(`image such as ${imageType.map((image) => image.split("/")[1])}`, file.originalname)));
            }
            else
                callback(null, true);
        },
    }).single("image");
    return uploader(req, res, function (err) {
        if (err instanceof multer_1.default.MulterError) {
            req.body.imageError = err.message;
        }
        next();
    });
}
exports.imageUploader = imageUploader;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = exports.adminMiddleware = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const responses_1 = __importDefault(require("../traits/responses"));
function adminMiddleware(req, res, next) {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET, function (err, decoded) {
            if (err)
                return responses_1.default.Unauthorized(res);
            if (decoded && decoded.isAdmin)
                next();
            else
                return responses_1.default.Unauthorized(res);
        });
    }
    else
        return responses_1.default.Unauthorized(res);
}
exports.adminMiddleware = adminMiddleware;
function userMiddleware(req, res, next) {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET, function (err, decoded) {
            if (err)
                return responses_1.default.Unauthorized(res);
            if (decoded && !decoded.isAdmin)
                next(); // bar
        });
    }
    else
        return responses_1.default.Unauthorized(res);
}
exports.userMiddleware = userMiddleware;

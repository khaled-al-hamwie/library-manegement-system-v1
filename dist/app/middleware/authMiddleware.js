"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = exports.adminMiddleware = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const credential_1 = require("../models/credential");
const responses_1 = __importDefault(require("../traits/responses"));
function adminMiddleware(req, res, next) {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET, function (err, decoded) {
            return __awaiter(this, void 0, void 0, function* () {
                if (err)
                    return responses_1.default.Unauthorized(res);
                if (decoded && decoded.isAdmin) {
                    const credential = yield credential_1.Credential.findByPk(decoded.id);
                    if (!credential || !credential.tokens.includes(token))
                        return responses_1.default.Unauthorized(res);
                    req.body.id = decoded.id;
                    next();
                }
                else
                    return responses_1.default.Unauthorized(res);
            });
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
            return __awaiter(this, void 0, void 0, function* () {
                if (err)
                    return responses_1.default.Unauthorized(res);
                if (decoded && !decoded.isAdmin) {
                    const credential = yield credential_1.Credential.findByPk(decoded.id);
                    if (!credential || !credential.tokens.includes(token))
                        return responses_1.default.Unauthorized(res);
                    req.body.id = decoded.id;
                    next();
                }
                else
                    return responses_1.default.Unauthorized(res);
            });
        });
    }
    else
        return responses_1.default.Unauthorized(res);
}
exports.userMiddleware = userMiddleware;

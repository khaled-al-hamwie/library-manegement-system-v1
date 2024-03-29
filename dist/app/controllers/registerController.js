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
const bcryptjs_1 = require("bcryptjs");
const credential_1 = require("../models/credential");
const responses_1 = __importDefault(require("../traits/responses"));
class RegisterController {
    static register(email, password, isAdmin = false) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield credential_1.Credential.create({
                email,
                password,
                isAdmin,
            });
        });
    }
    static login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield credential_1.Credential.findOne({
                where: { email: req.body.email },
            })
                .then((credential) => __awaiter(this, void 0, void 0, function* () {
                if (credential) {
                    return {
                        done: yield (0, bcryptjs_1.compare)(req.body.password, credential.password),
                        token: credential.tokens[0],
                    };
                }
                throw new Error("Credential does n't match ");
            }))
                .then(({ done, token }) => {
                if (done)
                    return res.json({ result: token });
                throw new Error("Credential does n't match ");
            })
                .catch((e) => responses_1.default.validation(res, e.message));
        });
    }
}
exports.default = RegisterController;

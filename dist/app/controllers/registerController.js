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
const credential_1 = require("../models/credential");
const reader_1 = require("../models/reader");
const responses_1 = __importDefault(require("../traits/responses"));
class RegisterController {
    static register(req, res, nex) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = req.body.email;
            const password = req.body.password;
            let credential = yield credential_1.Credential.create({
                email: email,
                password: password,
            });
            yield reader_1.Reader.create({
                credential_id: credential.credential_id,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                address: req.body.address,
                phone_number: req.body.phone_number,
            })
                .then((results) => responses_1.default.creation(res, { results, token: credential.tokens[0] }, "Reader"))
                .catch((errors) => responses_1.default.server(res, errors));
        });
    }
}
exports.default = RegisterController;

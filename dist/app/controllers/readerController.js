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
const reader_1 = require("../models/reader");
const responses_1 = __importDefault(require("../traits/responses"));
const registerController_1 = __importDefault(require("./registerController"));
class ReaderController {
    static getReader(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json();
        });
    }
    static createReader(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const credential = yield registerController_1.default.register(req.body.email, req.body.password, false);
            yield reader_1.Reader.create({
                credential_id: credential.credential_id,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                address: req.body.address,
                phone_number: req.body.phone_number,
            })
                .then((reader) => responses_1.default.creation(res, {
                reader_id: reader.reader_id,
                credential_id: reader.credential_id,
                first_name: reader.first_name,
                last_name: reader.last_name,
                address: reader.address,
                phone_number: reader.phone_number,
                token: credential.tokens[0],
            }, "Reader"))
                .catch((errors) => responses_1.default.server(res, errors));
        });
    }
    static showReader(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json();
        });
    }
    static updateReader(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json();
        });
    }
    static deleteReader(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json();
        });
    }
}
exports.default = ReaderController;

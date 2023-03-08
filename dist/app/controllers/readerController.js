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
const registerController_1 = __importDefault(require("./registerController"));
class ReaderController {
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
            let reader = yield reader_1.Reader.findOne({
                where: { credential_id: req.body.id },
            });
            if (!reader)
                return responses_1.default.notExist(res);
            return responses_1.default.fetch(res, reader);
        });
    }
    static updateReader(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let reader = yield reader_1.Reader.findOne({
                where: { credential_id: req.body.id },
            });
            if (!reader)
                return responses_1.default.notExist(res);
            yield reader
                .update({
                first_name: req.body.first_name
                    ? req.body.first_name
                    : reader.first_name,
                last_name: req.body.last_name
                    ? req.body.last_name
                    : reader.last_name,
                address: req.body.address ? req.body.address : reader.address,
                phone_number: req.body.phone_number
                    ? req.body.phone_number
                    : reader.phone_number,
            })
                .then((result) => responses_1.default.ok(res))
                .catch((errors) => responses_1.default.server(res, errors));
        });
    }
    static deleteReader(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const reader = yield reader_1.Reader.findOne({
                where: { credential_id: req.body.id },
            });
            const credential = yield credential_1.Credential.findByPk(req.body.id);
            if (!reader || !credential)
                return responses_1.default.notExist(res);
            yield reader.destroy();
            yield credential.destroy();
            return responses_1.default.ok(res);
        });
    }
}
exports.default = ReaderController;

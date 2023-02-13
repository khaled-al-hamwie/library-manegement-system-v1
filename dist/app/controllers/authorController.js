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
const sequelize_1 = require("sequelize");
const author_1 = require("../models/author");
const responses_1 = __importDefault(require("../traits/responses"));
class AuthorController {
    static getAuthor(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const name = req.query.name;
            if (!name)
                return responses_1.default.fetch(res, yield author_1.Author.findAll());
            else
                return responses_1.default.fetch(res, yield author_1.Author.findAll({
                    where: { name: { [sequelize_1.Op.regexp]: name } },
                }));
        });
    }
    static createAuthor(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield author_1.Author.create({
                name: req.body.name,
                description: req.body.description,
                born: req.body.born,
            })
                .then((result) => {
                responses_1.default.creation(res, result, "author");
            })
                .catch((err) => responses_1.default.server(res, err));
        });
    }
    static showAuthor(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield author_1.Author.findByPk(req.params.id)
                .then((results) => {
                if (results == null) {
                    return responses_1.default.notFound(res, "author", req.params.id);
                }
                return responses_1.default.fetch(res, results);
            })
                .catch((errors) => responses_1.default.server(res, errors));
        });
    }
    static updateAuthor(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const name = req.body.name;
            const description = req.body.description;
            const born = req.body.born;
            const author = yield author_1.Author.findByPk(id);
            if (author) {
                if (name) {
                    author.set("name", name);
                }
                if (description)
                    author.set("description", description);
                if (born)
                    author.set("born", born);
                yield author.save();
                return responses_1.default.ok(res);
            }
            return responses_1.default.notFound(res, "author", id);
        });
    }
    static deleteAuthor(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const author = yield author_1.Author.findByPk(id);
            if (author) {
                yield author.destroy();
                return responses_1.default.ok(res);
            }
            return responses_1.default.notFound(res, "author", id);
        });
    }
}
exports.default = AuthorController;

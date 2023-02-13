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
const publisher_1 = require("../models/publisher");
const responses_1 = __importDefault(require("../traits/responses"));
class PublisherController {
    static getPublisher(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const name = req.query.name;
            if (!name)
                return responses_1.default.fetch(res, yield publisher_1.Publisher.findAll());
            else
                return responses_1.default.fetch(res, yield publisher_1.Publisher.findAll({
                    where: { name: { [sequelize_1.Op.regexp]: name } },
                }));
        });
    }
    static createPublisher(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            publisher_1.Publisher.create({
                name: req.body.name,
                year_of_publish: req.body.year_of_publish,
            })
                .then((results) => responses_1.default.creation(res, results, "publisher"))
                .catch((errors) => responses_1.default.server(res, errors));
        });
    }
    static showPublisher(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            return yield publisher_1.Publisher.findByPk(id)
                .then((results) => {
                if (results == null)
                    return responses_1.default.notFound(res, "publisher", id);
                return responses_1.default.fetch(res, results);
            })
                .catch((errors) => responses_1.default.server(res, errors));
        });
    }
    static updatePublisher(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const name = req.body.name;
            const year_of_publish = req.body.year_of_publish;
            const publisher = yield publisher_1.Publisher.findByPk(id);
            if (publisher) {
                if (name)
                    publisher.set("name", name);
                if (year_of_publish)
                    publisher.set("year_of_publish", year_of_publish);
                yield publisher.save();
                return responses_1.default.ok(res);
            }
            return responses_1.default.notFound(res, "publisher", id);
        });
    }
    static deletePublisher(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const publisher = yield publisher_1.Publisher.findByPk(id);
            if (publisher) {
                yield publisher.destroy();
                return responses_1.default.ok(res);
            }
            return responses_1.default.notFound(res, "publisher", id);
        });
    }
}
exports.default = PublisherController;

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
const status_1 = require("../models/status");
const responses_1 = __importDefault(require("../traits/responses"));
class StatusController {
    static getStatus(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const name = req.query.name;
            if (!name)
                return responses_1.default.fetch(res, yield status_1.Status.findAll());
            else
                return responses_1.default.fetch(res, yield status_1.Status.findAll({
                    where: { name: { [sequelize_1.Op.regexp]: name } },
                }));
        });
    }
    static createStatus(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            status_1.Status.create({
                name: req.body.name,
            })
                .then((results) => responses_1.default.creation(res, results, "status"))
                .catch((errors) => responses_1.default.server(res, errors));
        });
    }
    static showStatus(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            return yield status_1.Status.findByPk(id)
                .then((results) => {
                if (results == null)
                    return responses_1.default.notFound(res, "status", id);
                return responses_1.default.fetch(res, results);
            })
                .catch((errors) => responses_1.default.server(res, errors));
        });
    }
    static updateStatus(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const name = req.body.name;
            const status = yield status_1.Status.findByPk(id);
            if (status) {
                if (name)
                    status.set("name", name);
                yield status.save();
                return responses_1.default.ok(res);
            }
            return responses_1.default.notFound(res, "status", id);
        });
    }
    static deleteStatus(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const status = yield status_1.Status.findByPk(id);
            if (status) {
                yield status.destroy();
                return responses_1.default.ok(res);
            }
            return responses_1.default.notFound(res, "status", id);
        });
    }
}
exports.default = StatusController;

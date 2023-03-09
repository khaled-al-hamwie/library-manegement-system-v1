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
const issue_1 = require("../models/issue");
const responses_1 = __importDefault(require("../traits/responses"));
class IssueController {
    static getIssue(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let name = req.query.name;
            if (!name)
                return responses_1.default.fetch(res, yield issue_1.Issue.findAll());
            else {
                return responses_1.default.fetch(res, yield issue_1.Issue.findAll({
                    where: { type: { [sequelize_1.Op.regexp]: name.toString() } },
                }));
            }
        });
    }
    static createIssue(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield issue_1.Issue.create({
                type: req.body.type,
                description: req.body.description,
            })
                .then((result) => responses_1.default.creation(res, result, "Issue"))
                .catch((err) => responses_1.default.server(res, err));
        });
    }
    static updateIssue(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const type = req.body.type;
            const description = req.body.description;
            const issue = yield issue_1.Issue.findByPk(id);
            if (issue) {
                if (type)
                    issue.set("type", type);
                if (description)
                    issue.set("description", description);
                yield issue.save();
                return responses_1.default.ok(res);
            }
            return responses_1.default.notFound(res, "status", id);
        });
    }
    static deleteIssue(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const issue = yield issue_1.Issue.findByPk(id);
            if (issue) {
                yield issue.destroy();
                return responses_1.default.ok(res);
            }
            return responses_1.default.notFound(res, "issue", id);
        });
    }
}
exports.default = IssueController;

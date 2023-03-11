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
const report_1 = require("../models/report");
const staff_1 = require("../models/staff");
const responses_1 = __importDefault(require("../traits/responses"));
class ReportController {
    static getReport(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let option = req.query.option;
            let searchQuery = undefined;
            let start = new Date();
            let end = new Date();
            switch (option) {
                case "today":
                    start.setHours(0, 0, 0, 0);
                    end.setHours(23, 59, 59, 59);
                    searchQuery = {
                        where: {
                            date: {
                                [sequelize_1.Op.between]: [start, end],
                            },
                        },
                    };
                    break;
                case "yesterday":
                    start.setHours(0, 0, 0, 0);
                    start.setDate(start.getDate() - 1);
                    end.setHours(23, 59, 59, 59);
                    end.setDate(end.getDate() - 1);
                    searchQuery = {
                        where: {
                            date: {
                                [sequelize_1.Op.between]: [start, end],
                            },
                        },
                    };
                    break;
                case "this_week":
                    start.setHours(0, 0, 0, 0);
                    end.setHours(23, 59, 59, 59);
                    end.setDate(end.getDate() + 7);
                    searchQuery = {
                        where: {
                            date: {
                                [sequelize_1.Op.between]: [start, end],
                            },
                        },
                    };
                    break;
                case "last_week":
                    start.setHours(0, 0, 0, 0);
                    end.setDate(end.getDate() - 7);
                    end.setHours(23, 59, 59, 59);
                    searchQuery = {
                        where: {
                            date: {
                                [sequelize_1.Op.between]: [start, end],
                            },
                        },
                    };
                    break;
                default:
                    searchQuery = undefined;
                    break;
            }
            return responses_1.default.fetch(res, yield report_1.Report.findAll(searchQuery));
        });
    }
    static createReport(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let staff = yield staff_1.Staff.findOne({
                where: { credential_id: req.body.id },
            });
            yield report_1.Report.create({
                book_id: req.body.book_id,
                reader_id: req.body.reader_id,
                staff_id: Number(staff === null || staff === void 0 ? void 0 : staff.staff_id),
                issue_id: req.body.issue_id,
                reservation_id: req.body.reservation_id,
                payment_id: req.body.payment_id,
                report: req.body.report,
            })
                .then((result) => responses_1.default.creation(res, result, "report"))
                .catch((err) => responses_1.default.server(res, err));
        });
    }
}
exports.default = ReportController;

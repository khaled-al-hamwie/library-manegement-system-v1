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
const reader_1 = require("../models/reader");
const reservation_1 = require("../models/reservation");
const staff_1 = require("../models/staff");
const formatDate_1 = require("../traits/formatDate");
const responses_1 = __importDefault(require("../traits/responses"));
const bookController_1 = __importDefault(require("./bookController"));
class ReservationController {
    static getReservation(req, res, next) {
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
                            return_date: {
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
                            return_date: {
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
                            return_date: {
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
                            return_date: {
                                [sequelize_1.Op.between]: [start, end],
                            },
                        },
                    };
                    break;
                default:
                    searchQuery = undefined;
                    break;
            }
            return responses_1.default.fetch(res, yield reservation_1.Reservation.findAll(searchQuery));
        });
    }
    //staff
    static createReservation(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let isAvailable = true;
            yield bookController_1.default.isAvailable(Number(req.body.book_id)).then((result) => {
                if (!result)
                    isAvailable = false;
            });
            if (!isAvailable)
                return res.json({ messge: "the book is unavilable" });
            let return_date = new Date();
            return_date.setDate(new Date().getDate() + Number(req.body.day));
            let staff = yield staff_1.Staff.findOne({
                where: { credential_id: req.body.id },
            });
            yield reservation_1.Reservation.create({
                staff_id: staff === null || staff === void 0 ? void 0 : staff.staff_id,
                book_id: req.body.book_id,
                reader_id: req.body.reader_id,
                reservation_date: new Date().toString(),
                return_date: (0, formatDate_1.formatDate)(return_date),
            })
                .then((result) => {
                bookController_1.default.updateStatus(Number(req.body.book_id), "rented");
                return responses_1.default.creation(res, result, "reservation");
            })
                .catch((err) => responses_1.default.server(res, err));
        });
    }
    //reader to see their reservation history
    static showReservation(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const reader = yield reader_1.Reader.findOne({
                where: { credential_id: req.body.id },
            });
            return responses_1.default.fetch(res, yield reservation_1.Reservation.findAll({
                where: { reader_id: reader === null || reader === void 0 ? void 0 : reader.reader_id },
            }));
        });
    }
}
exports.default = ReservationController;

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
const book_1 = require("../models/book");
const payment_1 = require("../models/payment");
const sold_1 = require("../models/sold");
const staff_1 = require("../models/staff");
const responses_1 = __importDefault(require("../traits/responses"));
const bookController_1 = __importDefault(require("./bookController"));
class PaymentController {
    static getPayment(req, res, next) {
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
                            payment_date: {
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
                            payment_date: {
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
                            payment_date: {
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
                            payment_date: {
                                [sequelize_1.Op.between]: [start, end],
                            },
                        },
                    };
                    break;
                default:
                    searchQuery = undefined;
                    break;
            }
            return responses_1.default.fetch(res, yield payment_1.Payment.findAll(searchQuery));
        });
    }
    static createPayment(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let staff = yield staff_1.Staff.findOne({
                where: { credential_id: req.body.id },
            });
            let books = yield book_1.Book.findAll({
                where: { book_id: { [sequelize_1.Op.in]: req.body.books } },
            });
            let total_price = 0;
            books.forEach((book) => {
                total_price += Number(book.price);
            });
            yield payment_1.Payment.create({
                staff_id: staff === null || staff === void 0 ? void 0 : staff.staff_id,
                reader_id: req.body.reader_id,
                payment_date: new Date().toString(),
                payment_total: total_price,
            })
                .then((result) => __awaiter(this, void 0, void 0, function* () {
                // BookController.updateStatus(Number(req.body.book_id), "sold");
                books.forEach((book) => __awaiter(this, void 0, void 0, function* () {
                    yield sold_1.Sold.create({
                        payment_id: Number(result.payment_id),
                        book_id: Number(book.book_id),
                    });
                    yield bookController_1.default.updateStatus(Number(book.book_id), "sold");
                }));
                return responses_1.default.creation(res, result, "payment");
            }))
                .catch((err) => responses_1.default.server(res, err));
        });
    }
    static showPayment(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json();
        });
    }
}
exports.default = PaymentController;

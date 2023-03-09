import { NextFunction, Request, Response } from "express";
import { FindOptions, Op } from "sequelize";
import { Payment } from "../models/payment";
import { Staff } from "../models/staff";
import { formatDate } from "../traits/formatDate";
import HttpResponse from "../traits/responses";
import BookController from "./bookController";

class PaymentController {
    static async getPayment(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        let option = req.query.option;
        let searchQuery: FindOptions<any> | undefined = undefined;
        let start = new Date();
        let end = new Date();
        switch (option) {
            case "today":
                start.setHours(0, 0, 0, 0);
                end.setHours(23, 59, 59, 59);
                searchQuery = {
                    where: {
                        payment_date: {
                            [Op.between]: [start, end],
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
                            [Op.between]: [start, end],
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
                            [Op.between]: [start, end],
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
                            [Op.between]: [start, end],
                        },
                    },
                };
                break;
            default:
                searchQuery = undefined;
                break;
        }
        return HttpResponse.fetch(res, await Payment.findAll(searchQuery));
    }

    static async createPayment(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        let isAvailable = true;
        await BookController.isAvailable(Number(req.body.book_id)).then(
            (result) => {
                if (!result) {
                    isAvailable = false;
                }
            }
        );
        if (!isAvailable) return res.json({ messge: "the book is unavilable" });

        let staff = await Staff.findOne({
            where: { credential_id: req.body.id },
        });
        await Payment.create({
            staff_id: staff?.staff_id,
            book_id: req.body.book_id,
            reader_id: req.body.reader_id,
            payment_date: new Date().toString(),
        })
            .then((result) => {
                BookController.updateStatus(Number(req.body.book_id), "sold");
                return HttpResponse.creation(res, result, "reservation");
            })
            .catch((err) => HttpResponse.server(res, err));
    }

    static async showPayment(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        return res.json();
    }
}
export default PaymentController;

import { NextFunction, Request, Response } from "express";
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
        return res.json();
    }

    static async createPayment(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        console.count("ha ha");
        BookController.isAvailable(Number(req.body.book_id)).then((result) => {
            if (!result) return res.json({ messge: "the book is unavilable" });
        });

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

    static async updatePayment(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        return res.json();
    }

    static async deletePayment(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        return res.json();
    }
}
export default PaymentController;

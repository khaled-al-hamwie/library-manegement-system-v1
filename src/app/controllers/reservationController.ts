import { NextFunction, Request, Response } from "express";
import { Reservation } from "../models/reservation";
import { Staff } from "../models/staff";
import { formatDate } from "../traits/formatDate";
import HttpResponse from "../traits/responses";
import BookController from "./bookController";

class ReservationController {
    //staff
    static async getReservation(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        return res.json();
    }
    //staff
    static async createReservation(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        BookController.isAvailable(Number(req.body.book_id)).then((result) => {
            if (!result) return res.json({ messge: "the book is unavilable" });
        });

        let return_date = new Date();
        return_date.setDate(new Date().getDate() + Number(req.body.day));
        let staff = await Staff.findOne({
            where: { credential_id: req.body.id },
        });
        await Reservation.create({
            staff_id: staff?.staff_id,
            book_id: req.body.book_id,
            reader_id: req.body.reader_id,
            reservation_date: new Date().toString(),
            return_date: formatDate(return_date),
        })
            .then((result) => {
                BookController.updateStatus(Number(req.body.book_id), "rented");
                return HttpResponse.creation(res, result, "reservation");
            })
            .catch((err) => HttpResponse.server(res, err));
    }
    //reader to see their reservation history
    static async showReservation(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        return res.json();
    }
}
export default ReservationController;

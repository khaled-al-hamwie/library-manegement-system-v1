import { Router } from "express";
import ReservationController from "../../app/controllers/reservationController";
import { validationHandler } from "../../app/middleware/validationHandler";
import { reservationValidator } from "../../app/validators/reservationValidator";

export const reservationRouterAdmin: Router = Router();
export const reservationRouterPublic: Router = Router();

reservationRouterAdmin
    .route("/reservation")
    .post(
        reservationValidator(),
        validationHandler,
        ReservationController.createReservation
    )
    .get(ReservationController.getReservation);

reservationRouterPublic.get(
    "/reservation",
    ReservationController.showReservation
);

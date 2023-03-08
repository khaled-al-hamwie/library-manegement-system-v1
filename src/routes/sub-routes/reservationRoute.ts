import { Router } from "express";
import ReservationController from "../../app/controllers/reservationController";
import { errorHandler } from "../../app/middleware/errorHandler";

export const reservationRouterAdmin: Router = Router();
export const reservationRouterPublic: Router = Router();

reservationRouterAdmin
    .route("/reservation")
    .post(errorHandler, ReservationController.createReservation)
    .get(ReservationController.getReservation);

reservationRouterPublic.get(
    "/reservation",
    ReservationController.showReservation
);

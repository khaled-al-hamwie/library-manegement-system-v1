import { Router } from "express";
import PaymentController from "../../app/controllers/paymentController";

import { validationHandler } from "../../app/middleware/validationHandler";
import { paymentValidator } from "../../app/validators/paymentValidator";

export const paymentRouterAdmin: Router = Router();
export const paymentRouterPublic: Router = Router();

paymentRouterAdmin
    .route("/payment")
    .post(
        paymentValidator(),
        validationHandler,
        PaymentController.createPayment
    )
    .get(PaymentController.getPayment);

paymentRouterPublic.get("/payment", PaymentController.showPayment);

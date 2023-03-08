import { Router } from "express";
import ReaderController from "../app/controllers/readerController";
import { userMiddleware } from "../app/middleware/authMiddleware";
import { validationHandler } from "../app/middleware/validationHandler";
import { readerValidator } from "../app/validators/readerValidator";
import { registerValidator } from "../app/validators/registerValidator";
import { reservationRouterPublic } from "./sub-routes/reservationRoute";

const readerRouter: Router = Router();
const profileRouter: Router = Router();
profileRouter
    .route("/")
    .get(ReaderController.showReader)
    .patch(readerValidator(), validationHandler, ReaderController.updateReader)
    .delete(ReaderController.deleteReader);

readerRouter.post(
    "/register",
    registerValidator(),
    validationHandler,
    ReaderController.createReader
);

readerRouter.use("/me", userMiddleware, profileRouter, reservationRouterPublic);

export default readerRouter;

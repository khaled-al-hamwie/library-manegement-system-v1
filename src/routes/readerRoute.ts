import { Router } from "express";
import ReaderController from "../app/controllers/readerController";
import { userMiddleware } from "../app/middleware/authMiddleware";
import { validationHandler } from "../app/middleware/validationHandler";
import { readerValidator } from "../app/validators/readerValidator";
import { registerValidator } from "../app/validators/registerValidator";

const readerRouter: Router = Router();

readerRouter.post(
    "/register",
    registerValidator(),
    validationHandler,
    ReaderController.createReader
);

readerRouter
    .use(userMiddleware)
    .route("/me")
    .get(ReaderController.showReader)
    .patch(readerValidator(), validationHandler, ReaderController.updateReader)
    .delete(ReaderController.deleteReader);

export default readerRouter;

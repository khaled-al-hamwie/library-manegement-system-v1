import { Router } from "express";
import ReaderController from "../app/controllers/readerController";
import RegisterController from "../app/controllers/registerController";
import { adminMiddleware } from "../app/middleware/authMiddleware";
import { validationHandler } from "../app/middleware/validationHandler";
import {
    loginValidator,
    registerValidator,
} from "../app/validators/registerValidator";

const readerRouter: Router = Router();

readerRouter
    .route("/register")
    .post(
        registerValidator(),
        validationHandler,
        ReaderController.createReader
    );

export default readerRouter;

import { Router } from "express";
import RegisterController from "../app/controllers/registerController";
import { validationHandler } from "../app/middleware/validationHandler";
import {
    loginValidator,
    registerValidator,
} from "../app/validators/registerValidator";

const readerRouter: Router = Router();

readerRouter
    .route("/register")
    .post(registerValidator(), validationHandler, RegisterController.register);

readerRouter
    .route("/login")
    .post(loginValidator(), validationHandler, RegisterController.login);

export default readerRouter;

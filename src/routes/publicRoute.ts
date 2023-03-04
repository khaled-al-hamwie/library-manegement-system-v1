import { Router } from "express";
import RegisterController from "../app/controllers/registerController";
import { validationHandler } from "../app/middleware/validationHandler";
import { loginValidator } from "../app/validators/registerValidator";
import { authorRouterPublic } from "./sub-routes/authorRoute";
import { bookRouterPublic } from "./sub-routes/bookRoute";
import { categoryRouterPublic } from "./sub-routes/categoryRoute";

const publicRouter: Router = Router();
publicRouter
    .route("/login")
    .post(loginValidator(), validationHandler, RegisterController.login);
publicRouter.use(authorRouterPublic, categoryRouterPublic, bookRouterPublic);

export default publicRouter;

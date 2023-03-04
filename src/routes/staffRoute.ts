import { Router } from "express";
import StaffController from "../app/controllers/staffController";
import { authMiddleware } from "../app/middleware/authMiddleware";
import { validationHandler } from "../app/middleware/validationHandler";
import { registerValidator } from "../app/validators/registerValidator";
import { authorRouterAdmin } from "./sub-routes/authorRoute";
import { bookRouterAdmin } from "./sub-routes/bookRoute";
import { categoryRouterAdmin } from "./sub-routes/categoryRoute";
import { publisherRouterAdmin } from "./sub-routes/publisherRoute";
import { statusRouterAdmin } from "./sub-routes/statusRouter";

const staffRouter: Router = Router();

staffRouter.post(
    "/admin/register",
    authMiddleware,
    registerValidator(),
    validationHandler,
    StaffController.createStaff
);

staffRouter.get("/admin/staff", authMiddleware, StaffController.getStaff);
staffRouter.delete(
    "/admin/staff/:id",
    authMiddleware,
    StaffController.deleteStaff
);
staffRouter.use(
    "/admin",
    authMiddleware,
    authorRouterAdmin,
    categoryRouterAdmin,
    bookRouterAdmin,
    statusRouterAdmin,
    publisherRouterAdmin
);

export default staffRouter;

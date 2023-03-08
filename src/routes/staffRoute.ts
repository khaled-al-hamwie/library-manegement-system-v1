import { Router } from "express";
import StaffController from "../app/controllers/staffController";
import { adminMiddleware } from "../app/middleware/authMiddleware";
import { validationHandler } from "../app/middleware/validationHandler";
import { registerValidator } from "../app/validators/registerValidator";
import { authorRouterAdmin } from "./sub-routes/authorRoute";
import { bookRouterAdmin } from "./sub-routes/bookRoute";
import { categoryRouterAdmin } from "./sub-routes/categoryRoute";
import { publisherRouterAdmin } from "./sub-routes/publisherRoute";
import { reservationRouterAdmin } from "./sub-routes/reservationRoute";
import { statusRouterAdmin } from "./sub-routes/statusRouter";

const staffRouter: Router = Router();

staffRouter.post(
    "/admin/register",
    adminMiddleware,
    registerValidator(),
    validationHandler,
    StaffController.createStaff
);

staffRouter.get("/admin/staff", adminMiddleware, StaffController.getStaff);
staffRouter.delete(
    "/admin/staff/:id",
    adminMiddleware,
    StaffController.deleteStaff
);
staffRouter.use(
    "/admin",
    adminMiddleware,
    authorRouterAdmin,
    categoryRouterAdmin,
    bookRouterAdmin,
    statusRouterAdmin,
    publisherRouterAdmin,
    reservationRouterAdmin
);

export default staffRouter;

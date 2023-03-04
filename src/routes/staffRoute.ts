import { Router } from "express";
import StaffController from "../app/controllers/staffController";
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
    registerValidator(),
    validationHandler,
    StaffController.createStaff
);

staffRouter.get("/admin/staff", StaffController.getStaff);
staffRouter.delete("/admin/staff/:id", StaffController.deleteStaff);
staffRouter.use(
    "/admin",
    authorRouterAdmin,
    categoryRouterAdmin,
    bookRouterAdmin,
    statusRouterAdmin,
    publisherRouterAdmin
);

export default staffRouter;

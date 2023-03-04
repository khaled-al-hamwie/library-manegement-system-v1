import { Router } from "express";
import { authorRouterAdmin } from "./sub-routes/authorRoute";
import { bookRouterAdmin } from "./sub-routes/bookRoute";
import { categoryRouterAdmin } from "./sub-routes/categoryRoute";
import { publisherRouterAdmin } from "./sub-routes/publisherRoute";
import { statusRouterAdmin } from "./sub-routes/statusRouter";

const staffRouter: Router = Router();

staffRouter.use(
    "/admin",
    authorRouterAdmin,
    categoryRouterAdmin,
    bookRouterAdmin,
    statusRouterAdmin,
    publisherRouterAdmin
);

export default staffRouter;

import { Router } from "express";
import { authorRouterPublic } from "./sub-routes/authorRoute";
import { bookRouterPublic } from "./sub-routes/bookRoute";
import { categoryRouterPublic } from "./sub-routes/categoryRoute";

const publicRouter: Router = Router();

publicRouter.use(authorRouterPublic, categoryRouterPublic, bookRouterPublic);

export default publicRouter;

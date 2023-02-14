import bodyParser from "body-parser";
import { json, Router } from "express";
import authorRouter from "./authorRoute";
import bookRouter from "./bookRoute";
import categoryRouter from "./categoryRoute";
import publisherRouter from "./publisherRoute";
import statusRouter from "./statusRouter";
const router: Router = Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(json());

router.use(
    "/admin",
    categoryRouter,
    authorRouter,
    publisherRouter,
    statusRouter,
    bookRouter
);

export default router;

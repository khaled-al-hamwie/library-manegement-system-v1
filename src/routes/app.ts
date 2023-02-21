import bodyParser from "body-parser";
import { json, Router } from "express";
import { errorHandler } from "../app/middleware/errorHandler";
import authorRouter from "./authorRoute";
import bookRouter from "./bookRoute";
import categoryRouter from "./categoryRoute";
import publisherRouter from "./publisherRoute";
import readerRouter from "./readerRoute";
import statusRouter from "./statusRouter";
const router: Router = Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
// router.use(json());

router.use(
    "/admin",
    categoryRouter,
    authorRouter,
    publisherRouter,
    statusRouter,
    bookRouter
);

router.use(readerRouter);
router.use(errorHandler);
export default router;

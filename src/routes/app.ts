import bodyParser from "body-parser";
import { json, Router } from "express";
import { errorHandler } from "../app/middleware/errorHandler";
import publicRouter from "./publicRoute";
import readerRouter from "./readerRoute";
import staffRouter from "./staffRoute";
const router: Router = Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
// router.use(json());

router.use(publicRouter);
router.use(staffRouter);

router.use(readerRouter);

router.use(errorHandler);
export default router;

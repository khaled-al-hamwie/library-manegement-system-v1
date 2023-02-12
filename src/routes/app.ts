import bodyParser from "body-parser";
import { json, Router } from "express";
import authorRouter from "./authorRoute";
import categoryRouter from "./categoryRoute";
const router: Router = Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(json());

router.use("/admin", categoryRouter, authorRouter);

export default router;

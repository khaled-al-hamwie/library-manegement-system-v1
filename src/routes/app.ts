import bodyParser from "body-parser";
import { json, Router } from "express";
import staffRouter from "./staffRoute";
const router: Router = Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(json());

router.use("/admin", staffRouter);

export default router;

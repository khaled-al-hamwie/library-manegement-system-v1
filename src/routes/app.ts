import bodyParser from "body-parser";
import { json, Router } from "express";

const router: Router = Router();

router.use(json());
router.use(bodyParser.urlencoded({ extended: false }));

export default router;

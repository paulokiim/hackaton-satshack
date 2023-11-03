import { Router } from "express";

import moduleController from "../controller/module";

const router = Router();

router.get("/module", moduleController.findAll);
router.get("/module/:uid", moduleController.findByUid);
router.post("/module", moduleController.create);

export default router;

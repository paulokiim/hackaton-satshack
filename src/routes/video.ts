import { Router } from "express";
import multer from "multer";

import videoController from "../controller/video";

const upload = multer({ dest: "uploads/" });

const router = Router();

router.post("/video", upload.single("video"), videoController.uploadVideo);
router.put("/video/:uid", videoController.update);
router.get("/video/:uid", videoController.findByUid);
router.get("/video/module/:moduleUid", videoController.findAllByModuleUid);

export default router;

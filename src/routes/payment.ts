import { Router } from "express";

import paymentController from "../controller/payment";

const router = Router();

router.post("/payment", paymentController.createInvoice);

export default router;

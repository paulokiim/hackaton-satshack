import { Router } from "express";

import paymentController from "../controller/payment";

const router = Router();

router.post("/payment", paymentController.createInvoice);
router.get("/payment/status/:paymentHash", paymentController.getInvoiceStatus);

export default router;

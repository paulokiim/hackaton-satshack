import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import paymentBO from "../core/business-operation/payment";

const createInvoice = async (req: Request, res: Response) => {
  const body = req.body;

  const createInvoiceParams = {
    out: false,
    ...body,
  } as CreatePaymentInvoiceParams;

  const invoice = await paymentBO.createInvoice(createInvoiceParams);

  return res.status(StatusCodes.CREATED).send(invoice);
};

export default {
  createInvoice,
};

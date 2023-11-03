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

const getInvoiceStatus = async (req: Request, res: Response) => {
  const params = req.params;

  const getInvoiceStatusParams = {
    ...params,
  } as GetPaymentInvoiceParams;

  const status = await paymentBO.getInvoiceStatus(getInvoiceStatusParams);

  return res.status(StatusCodes.OK).send(status);
};

export default {
  createInvoice,
  getInvoiceStatus,
};

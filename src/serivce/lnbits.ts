import axios from "axios";
import { StatusCodes } from "http-status-codes";
import { camelizeKeys } from "humps";

import config from "../config";

const client = axios.create({
  baseURL: config.lnBits.baseUrl,
  headers: {
    "X-Api-Key": config.lnBits.invoiceKey,
  },
});

const createInvoice = async (
  createInvoiceParams: CreatePaymentInvoiceParams
): Promise<CreatePaymentInvoiceResponse> => {
  const response = await client.post("/api/v1/payments", createInvoiceParams);

  if (response.status !== StatusCodes.CREATED)
    throw new Error("Error creating an invoice");

  const camelizedData = camelizeKeys(response.data);

  return camelizedData as CreatePaymentInvoiceResponse;
};

const getInvoiceStatus = async (
  getInvoiceStatusParams: GetPaymentInvoiceParams
) => {
  const response = await client.get(
    `/api/v1/payments/${getInvoiceStatusParams.paymentHash}`
  );

  if (response.status !== StatusCodes.OK)
    throw new Error("Error getting invoice status");

  const camelizedData = camelizeKeys(response.data);

  return camelizedData;
};

export default {
  createInvoice,
  getInvoiceStatus,
};

import { StatusCodes } from "http-status-codes";

export const PaymentInvoiceMock = {
  status: StatusCodes.CREATED,
  data: {
    paymentHash: "fake-hash",
    paymentRequest: "fake-request",
    checkingId: "fake-checking-id",
    lnrulResponse: null,
  },
};

export const FailedPaymentInvoiceMock = {
  status: StatusCodes.BAD_REQUEST,
  data: {},
};

export const PaymentInvoiceParamsMock = {
  out: false,
  amount: 10.0,
};

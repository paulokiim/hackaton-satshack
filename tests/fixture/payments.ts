import { StatusCodes } from "http-status-codes";

export const PaymentInvoiceMock = {
  status: StatusCodes.CREATED,
  data: {
    paymentHash: "fake-hash",
    paymentRequest: "fake-request",
    checkingId: "fake-checking-id",
    lnrulResponse: undefined,
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

export const PaymentInvoiceStatusMock = {
  status: StatusCodes.OK,
  data: {
    paid: true,
  },
};

export const PaymentInvoiceStatusParams = {
  paymentHash: "fake-hash",
};

export const FailedPaymentInvoiceStatusMock = {
  status: StatusCodes.BAD_REQUEST,
  data: {},
};

type CreatePaymentInvoiceParams = {
  amount: number;
  out?: boolean;
  memo?: string;
  expiry?: number;
  unit?: string;
  webhook?: string;
  internal?: boolean;
};

type CreatePaymentInvoiceResponse = {
  paymentHash: string;
  paymentRequest: string;
  checkingId: string;
  lnurlResponse?: string;
};

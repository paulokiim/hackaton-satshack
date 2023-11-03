import QRCode from "qrcode";

import lnBitsService from "../../serivce/lnbits";

const createInvoice = async (
  createInvoiceParams: CreatePaymentInvoiceParams
) => {
  try {
    const invoice = await lnBitsService.createInvoice(createInvoiceParams);

    const qrCode = await QRCode.toDataURL(invoice.paymentRequest);

    return {
      paymentHash: invoice.paymentHash,
      checkingId: invoice.checkingId,
      lnurlResponse: invoice.lnurlResponse,
      qrCode,
    };
  } catch (error) {
    console.log("Error: ", error);
    throw new Error("Error trying to createInvoice");
  }
};

const getInvoiceStatus = async (
  getInvoiceStatusParams: GetPaymentInvoiceParams
) => {
  try {
    const status = await lnBitsService.getInvoiceStatus(getInvoiceStatusParams);

    return status;
  } catch (error) {
    console.log("Error: ", error);
    throw new Error("Error trying to getInvoiceStatus");
  }
};

export default {
  createInvoice,
  getInvoiceStatus,
};

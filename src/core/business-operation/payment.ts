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
    throw new Error("Error trying to create invoike");
  }
};

export default {
  createInvoice,
};

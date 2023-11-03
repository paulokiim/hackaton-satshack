import QRCode from "qrcode";

import lnBitsPayment from "../../../src/core/business-operation/payment";
import lnBitsService from "../../../src/serivce/lnbits";
import {
  PaymentInvoiceMock,
  PaymentInvoiceParamsMock,
} from "../../fixture/payments";

describe("PaymentBusinessOperation", () => {
  describe("createInvoice()", () => {
    it("Should create an invoice", async () => {
      jest
        .spyOn(lnBitsService, "createInvoice")
        .mockResolvedValueOnce(PaymentInvoiceMock.data);

      const invoice = await lnBitsPayment.createInvoice(
        PaymentInvoiceParamsMock
      );

      const response = {
        paymentHash: PaymentInvoiceMock.data.paymentHash,
        qrCode: await QRCode.toDataURL(PaymentInvoiceMock.data.paymentRequest),
        checkingId: PaymentInvoiceMock.data.checkingId,
        lnurlResponse: PaymentInvoiceMock.data.lnrulResponse,
      };

      expect(invoice).toEqual(response);
    });

    it("Should throw an error", async () => {
      jest.spyOn(lnBitsService, "createInvoice").mockRejectedValueOnce(Error);

      try {
        await lnBitsPayment.createInvoice(PaymentInvoiceParamsMock);
      } catch (error) {
        expect(error).toEqual(new Error("Error trying to create invoike"));
      }
    });
  });
});

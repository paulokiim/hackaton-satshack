import QRCode from "qrcode";

import paymentBO from "../../../src/core/business-operation/payment";
import lnBitsService from "../../../src/serivce/lnbits";
import {
  PaymentInvoiceMock,
  PaymentInvoiceParamsMock,
  PaymentInvoiceStatusMock,
  PaymentInvoiceStatusParams,
} from "../../fixture/payments";

describe("PaymentBusinessOperation", () => {
  describe("createInvoice()", () => {
    it("Should create an invoice", async () => {
      jest
        .spyOn(lnBitsService, "createInvoice")
        .mockResolvedValueOnce(PaymentInvoiceMock.data);

      const invoice = await paymentBO.createInvoice(PaymentInvoiceParamsMock);

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
        await paymentBO.createInvoice(PaymentInvoiceParamsMock);
      } catch (error) {
        expect(error).toEqual(new Error("Error trying to createInvoice"));
      }
    });
  });

  describe("getInvoiceStatus()", () => {
    it("Should get invoice status", async () => {
      jest
        .spyOn(lnBitsService, "getInvoiceStatus")
        .mockResolvedValueOnce(PaymentInvoiceStatusMock.data);

      const status = await paymentBO.getInvoiceStatus(
        PaymentInvoiceStatusParams
      );

      expect(status).toEqual(PaymentInvoiceStatusMock.data);
    });

    it("Should throw an error", async () => {
      jest
        .spyOn(lnBitsService, "getInvoiceStatus")
        .mockRejectedValueOnce(Error);

      try {
        await paymentBO.getInvoiceStatus(PaymentInvoiceStatusParams);
      } catch (error) {
        expect(error).toEqual(new Error("Error trying to getInvoiceStatus"));
      }
    });
  });
});

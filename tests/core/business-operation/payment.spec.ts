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

      expect(invoice).toEqual(PaymentInvoiceMock.data);
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

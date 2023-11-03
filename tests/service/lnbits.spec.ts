import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.create.mockReturnThis();

import lnBitsService from "../../src/serivce/lnbits";
import {
  FailedPaymentInvoiceMock,
  PaymentInvoiceMock,
  PaymentInvoiceParamsMock,
} from "../fixture/payments";

describe("LnBitsService", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("createInvoice()", () => {
    it("Should create an invoice", async () => {
      jest.spyOn(mockedAxios, "post").mockResolvedValueOnce(PaymentInvoiceMock);

      const invoice = await lnBitsService.createInvoice(
        PaymentInvoiceParamsMock
      );

      expect(mockedAxios.post).toHaveBeenCalledTimes(1);
      expect(invoice).toEqual(PaymentInvoiceMock.data);
    });

    it("Should throw error because of status code", async () => {
      jest
        .spyOn(mockedAxios, "post")
        .mockResolvedValueOnce(FailedPaymentInvoiceMock);

      try {
        await lnBitsService.createInvoice(PaymentInvoiceParamsMock);
      } catch (error) {
        expect(error).toEqual(new Error("Error creating an invoice"));
      }
    });
  });
});

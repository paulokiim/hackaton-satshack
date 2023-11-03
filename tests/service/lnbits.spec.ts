import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.create.mockReturnThis();

import lnBitsService from "../../src/serivce/lnbits";
import {
  FailedPaymentInvoiceMock,
  FailedPaymentInvoiceStatusMock,
  PaymentInvoiceMock,
  PaymentInvoiceParamsMock,
  PaymentInvoiceStatusMock,
  PaymentInvoiceStatusParams,
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

  describe("getInvoiceStatus()", () => {
    it("Should return invoice status", async () => {
      jest
        .spyOn(mockedAxios, "get")
        .mockResolvedValueOnce(PaymentInvoiceStatusMock);

      const status = await lnBitsService.getInvoiceStatus(
        PaymentInvoiceStatusParams
      );

      expect(status).toEqual(PaymentInvoiceStatusMock.data);
    });

    it("Should throw error because of status code", async () => {
      jest
        .spyOn(mockedAxios, "get")
        .mockResolvedValueOnce(FailedPaymentInvoiceStatusMock);

      try {
        await lnBitsService.getInvoiceStatus(PaymentInvoiceStatusParams);
      } catch (error) {
        expect(error).toEqual(new Error("Error getting invoice status"));
      }
    });
  });
});

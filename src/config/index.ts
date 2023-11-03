import dotenv from "dotenv";

dotenv.config();

export default {
  port: 3000,
  lnBits: {
    baseUrl: "https://legend.lnbits.com",
    invoiceKey: process.env.INVOICE_KEY,
    adminKey: process.env.ADMIN_KEY,
  },
};

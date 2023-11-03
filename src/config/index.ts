import dotenv from "dotenv";
import { Dialect } from "sequelize";

dotenv.config();

export default {
  port: 3000,
  database: {
    name: process.env.DB_NAME as string,
    user: process.env.DB_USER as string,
    host: process.env.DB_HOST as string,
    driver: process.env.DB_DRIVER as Dialect,
    password: process.env.DB_PASSWORD as string,
  },
};

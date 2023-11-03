import express from "express";
import cors from "cors";

import config from "./config";

import Video from "./core/repository/models/Video";
import Module from "./core/repository/models/Module";

import moduleRoutes from "./routes/module";
import videoRoutes from "./routes/video";
import paymentRoutes from "./routes/payment";

const setup = async () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(moduleRoutes);
  app.use(videoRoutes);
  app.use(paymentRoutes);

  try {
    await Module.sync();
    await Video.sync();
  } catch (error) {
    console.log("Error trying to sync database: ", error);
    process.exit(1);
  }

  return app;
};

const main = async () => {
  const app = await setup();

  app.listen(config.port, () => console.log("Listening on port 3000"));
};

main();

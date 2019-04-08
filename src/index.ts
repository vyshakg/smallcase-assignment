import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import { createDatabaseConn } from "./createDatabaseConn";
import dataPopulateRoute from "./routes/populateData";
import portfolioRoute from "./routes/portfolio";
import tradeRoute from "./routes/trades";
import securitiesRoute from "./routes/securities";

dotenv.config();

const PORT = process.env.PORT || 4000;

(async () => {
  const app = express();

  app.disable("x-powered-by");

  await createDatabaseConn();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use(dataPopulateRoute);
  app.use(tradeRoute);
  app.use(portfolioRoute);
  app.use(securitiesRoute);

  app.listen(PORT, () => {
    console.log(`server started at  http://localhost:${PORT}`);
  });
})();

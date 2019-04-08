import express from "express";
import Portfolio from "../entities/portfolio";
const dataPopulateRoute = express.Router();

dataPopulateRoute.post("/api/dataPopulate", async (req, res) => {
  try {
    Portfolio.create(
      {
        tickerSymbol: "TCS",
        averageBuyPrice: 1833.45,
        shares: 5
      },
      {
        tickerSymbol: "WIPRO",
        averageBuyPrice: 319.25,
        shares: 10
      },
      {
        tickerSymbol: "GODREJIND",
        averageBuyPrice: 535.0,
        shares: 2
      }
    );

    return res.json({ ok: true });
  } catch (e) {
    console.log(e);
    return res.json({ ok: false });
  }
});

export default dataPopulateRoute;

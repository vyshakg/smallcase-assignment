import express from "express";
import Portfolio from "../entities/portfolio";
const portfolioRoute = express.Router();

portfolioRoute.get("/api/portfolio", async (req, res) => {
  try {
    const portfolio = await Portfolio.find({});

    return res.status(200).json(portfolio);
  } catch (e) {
    console.log(e);
    return res.json({ ok: false });
  }
});

portfolioRoute.get("/api/cumulative", async (req, res) => {
  try {
    const portfolio = await Portfolio.find({});
    let cumulativeSum = 0;
    portfolio.forEach(security => {
      cumulativeSum += (100 - security.averageBuyPrice) * security.shares;
    });

    return res.status(200).json(cumulativeSum);
  } catch (e) {
    console.log(e);
    return res.status(200).json({ ok: false });
  }
});
export default portfolioRoute;

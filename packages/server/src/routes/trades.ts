import express from "express";
import Joi from "joi";
import Portfolio from "../entities/portfolio";
import { tradeBuy, tradeSell } from "../validation/trade";
const tradeRoute = express.Router();
tradeRoute.post("/api/trade/buy", async (req, res) => {
  try {
    const tickerSymbol = req.body.tickerSymbol.toUpperCase();
    const price = parseInt(req.body.price, 10);
    const quantity = parseInt(req.body.quantity, 10);

    await Joi.validate({ price, quantity }, tradeBuy, { abortEarly: false });

    const security = await Portfolio.findOne({ tickerSymbol });
    if (!security) {
      return res.status(400).json({ message: "owership is not present" });
    }

    const weightedAvg = (security.averageBuyPrice * security.shares + price * quantity) / (security.shares + quantity);
    const newQuantity = quantity + security.shares;

    await Portfolio.updateOne(
      {
        tickerSymbol
      },
      {
        averageBuyPrice: weightedAvg,
        shares: newQuantity
      }
    );

    return res.status(200).json({
      tickerSymbol,
      averageBuyPrice: weightedAvg,
      shares: newQuantity
    });
  } catch (e) {
    console.log(e.message);
    return res.status(400).json({ ok: false, message: e.message });
  }
});

tradeRoute.post("/api/trade/sell", async (req, res) => {
  try {
    const tickerSymbol = req.body.tickerSymbol.toUpperCase();

    const quantity = parseInt(req.body.quantity, 10);

    await Joi.validate({ quantity }, tradeSell, { abortEarly: false });

    const security = await Portfolio.findOne({ tickerSymbol: tickerSymbol.toUpperCase() });
    if (!security) {
      return res.status(400).json({ message: "owership is not present" });
    }
    if (quantity >= security.shares) {
      return res.status(400).json({ message: `sell shares within ${security.shares}` });
    }

    await Portfolio.updateOne(
      {
        tickerSymbol: tickerSymbol.toUpperCase()
      },
      {
        shares: security.shares - quantity
      }
    );
    return res.status(200).json({
      tickerSymbol: tickerSymbol.toUpperCase(),
      shares: security.shares - quantity
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ message: e.message });
  }
});
export default tradeRoute;

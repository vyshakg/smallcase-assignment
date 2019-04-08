import express from "express";
import Portfolio from "../entities/portfolio";
import { tradeBuy } from "../validation/trade";
import Joi from "joi";

const securitiesRoute = express.Router();

securitiesRoute.post("/api/security", async (req, res) => {
  try {
    const tickerSymbol = req.body.tickerSymbol.toUpperCase();
    const price = parseInt(req.body.price, 10);
    const quantity = parseInt(req.body.quantity, 10);

    await Joi.validate({ price, quantity }, tradeBuy, { abortEarly: false });

    const security = await Portfolio.findOne({ tickerSymbol });

    if (security) {
      return res
        .status(400)
        .json({ message: `security with name ${tickerSymbol} already exists` });
    } else {
      const newSecurity = await Portfolio.create({
        tickerSymbol: tickerSymbol,
        averageBuyPrice: price,
        shares: quantity
      });

      return res.json(newSecurity);
    }
  } catch (e) {
    console.log(e);
    return res.status(400).json({ ok: false, message: e.message });
  }
});

export default securitiesRoute;

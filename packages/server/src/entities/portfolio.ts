import { Model, model, Schema } from "mongoose";
import { IPortfolio } from "./IPortfolio";

const PortfolioSchema: Schema = new Schema({
  tickerSymbol: {
    type: String,
    required: true
  },
  averageBuyPrice: { type: Number, default: 0 },
  shares: { type: Number, default: 0 }
});

const Portfolio: Model<IPortfolio> = model<IPortfolio>("Portfolio", PortfolioSchema);
export default Portfolio;

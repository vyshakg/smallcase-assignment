import { Document } from "mongoose";

export interface IPortfolio extends Document {
  tickerSymbol: string;
  averageBuyPrice: number;
  shares: number;
}

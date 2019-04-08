import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

if (process.env.NODE_ENV === "development") {
  mongoose.set("debug", true);
}
// const MONGO_URL =
//   process.env.MONGO_URL || "mongodb://localhost:27017/smallcase";
const MONGO_URL =
  process.env.NODE_ENV === "production"
    ? `mongodb://${process.env.MONGODB_USER}:${encodeURIComponent(
        process.env.MONGODB_PASSWORD!
      )}@ds135036.mlab.com:35036/smallcase`
    : "mongodb://localhost:27017/smallcase";
export const createDatabaseConn = async () => {
  try {
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true });
    console.log("Connected to DataBase");
  } catch (e) {
    throw new Error("Coundn't connect to Database");
  }
};

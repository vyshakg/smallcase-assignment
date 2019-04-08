import mongoose from "mongoose";

if (process.env.NODE_ENV === "development") {
  mongoose.set("debug", true);
}
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/smallcase";

export const createDatabaseConn = async () => {
  try {
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true });
    console.log("Connected to DataBase");
  } catch (e) {
    throw new Error("Coundn't connect to Database");
  }
};

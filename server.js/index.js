import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { UserRouter } from "./routes/user.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use("/auth", UserRouter);
mongoose.connect("mongodb://localhost:27017/auth");

app.listen(process.env.PORT, () => {
  console.log("Server is Running");
});

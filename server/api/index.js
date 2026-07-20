import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import userroutes from "../routes/auth.js";
import questionroute from "../routes/question.js";
import answerroutes from "../routes/answer.js";

const app = express();
dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Stackoverflow clone is running perfect");
});
app.use("/user", userroutes);
app.use("/question", questionroute);
app.use("/answer", answerroutes);

let isConnected = false;
app.use(async (req, res, next) => {
  if (!isConnected) {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
  }
  next();
});

export default app;
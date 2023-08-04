import express from "express";
import dbConnect from "../config/dbConnect.js";
import cors from "cors";
import dotenv from "dotenv";
import jobRouter from "../routes/jobRoutes.js";
dotenv.config();

const app = express();
dbConnect();

app.use(cors());
app.use(express.json());
app.use("/api/v1/jobs", jobRouter);

export default app;

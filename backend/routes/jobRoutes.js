import express from "express";
import { createJobCtrl, getAllJobs } from "../controllers/jobCtrl.js";

const jobRouter = express.Router();

jobRouter.post("/", createJobCtrl);
jobRouter.get("/", getAllJobs);

export default jobRouter;

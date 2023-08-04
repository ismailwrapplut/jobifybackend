import asyncHandler from "express-async-handler";
import Job from "../models/jobModel.js";

export const createJobCtrl = asyncHandler(async (req, res) => {
  const { name, company, tags, pay, jobDescription } = req.body;
  if (!name || !company || !tags || !pay || !jobDescription) {
    throw new Error("Please enter all the fields");
  }
  const job = await Job.create({
    name,
    company,
    tags,
    pay,
    jobDescription,
  });
  if (job) {
    res.json({
      success: true,
      message: "Job created successfully",
      job,
    });
  } else {
    throw new Error("Job can't be created");
  }
});

export const getAllJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.find();
  if (jobs) {
    res.json({
      success: true,
      message: "Job fetched successfully",
      jobs,
    });
  } else {
    throw new Error("Job can't be created");
  }
});

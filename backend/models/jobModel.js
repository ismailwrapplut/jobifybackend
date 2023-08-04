import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    company: {
      type: Object,
      required: true,
    },
    tags: [{ type: String }],
    pay: {
      type: "String",
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    createdDate: {
      type: Date,
      default: Date.now,
    },
  },
  { toJSON: { virtuals: true } }
);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

jobSchema.virtual("formattedCreatedDate").get(function () {
  const date = this.createdDate;
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month}, ${year}`;
});
const Job = mongoose.model("Job", jobSchema);
export default Job;

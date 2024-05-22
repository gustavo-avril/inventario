import mongoose from "mongoose";

const phoneSchema = mongoose.Schema(
  {
    make: {
      type: String,
      required: true,
    },
    serial: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    ext: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Phone = mongoose.model("Phone", phoneSchema);

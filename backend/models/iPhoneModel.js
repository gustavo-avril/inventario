import mongoose from "mongoose";

const phoneSchema = mongoose.Schema(
  {
    make: {
      type: String,
      required: true,
    },
    serial: {
      type: String,
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
      type: String,
      required: true,
    },
    ext: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
)

export const Phone = mongoose.model('Phone', phoneSchema);

import mongoose from "mongoose";

const deviceSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    office: {
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
    devices: [
      {
        device: {
          type: String,
          required: true,
        },
        model: {
          type: String,
          required: true,
        },
        make: {
          type: String,
          required: true,
        },
        serial: {
          type: String,
          required: true,
        },
        color: {
          type: String,
          required: true,
        },
        state: {
          type: String,
          required: true,
        },
        password: {
          type: String,
          required: true,
        },
        image: {
          type: String,
          required: false,
        },
        qrcode: {
          type: String,
          required: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Device = mongoose.model("Device", deviceSchema);

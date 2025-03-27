import { Schema } from "mongoose";
import { randomUUID } from "crypto";

export const AboutSchema: Schema = new Schema(
  {
    _id: {
      type: String,
      default: randomUUID,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    autoCreate: false,
  }
);

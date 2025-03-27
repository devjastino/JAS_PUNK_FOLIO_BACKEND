import { Schema } from "mongoose";
import { randomUUID } from "crypto";

type Images = {
  uri: String;
  is_active: Boolean;
};

export const PortfolioSchema: Schema = new Schema(
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
    images: {
      type: Array<Images>,
      default: [],
    },
    link: {
      type: String,
      required: true,
    },
    is_active: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    autoCreate: false,
  }
);

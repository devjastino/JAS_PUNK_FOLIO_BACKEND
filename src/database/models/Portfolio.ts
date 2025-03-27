import { Model, model } from "mongoose";
import { PortfolioSchema } from "../schemas/Portfolio.schema";

type PortfolioModel = {
  _id: String;
  title: String;
  description: String;
  images: Array<{ uri: String; is_active: Boolean }>;
  link: String;
  is_active: Boolean;
};

export const Portfolio = model<Model<PortfolioModel>>(
  "Portfolio",
  PortfolioSchema,
  "Portfolio"
);

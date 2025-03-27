import { Model, model } from "mongoose";
import { AboutSchema } from "../schemas/About.schema";

type AboutModel = {
  _id: String;
  title: String;
  description: String;
  is_active: Boolean;
};

export const About = model<Model<AboutModel>>("About", AboutSchema, "About");

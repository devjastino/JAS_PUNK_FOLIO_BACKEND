import { connect, MongooseError } from "mongoose";
const DB_URI: string =
  process.env.DB_URI || "mongodb://localhost:27017/jas-punk-folio";
import { COLLECTIONS } from "../database/db.context";

const INITIALIZED_COLLECTIONS: Function = async (
  collections: [] = []
): Promise<void> => {
  try {
    if (collections.length != 0) {
      collections.map((collection: any) => {
        return collection.createCollection();
      });
      console.log("Collection Initialized!");
    } else {
      console.log("No Collections Yet!");
    }
  } catch (err: any) {
    console.log(err);
  }
};

export const DATABASE_CONNECTION: Function = async (): Promise<void> => {
  try {
    const connection: object | null = await connect(DB_URI);
    if (connection == null) {
      console.log(`Something went wrong!`);
    } else {
      await INITIALIZED_COLLECTIONS(COLLECTIONS);
      console.log(`Database Connected!`);
    }
  } catch (err: unknown) {
    const error: MongooseError = err as MongooseError;
    console.log(error);
  }
};

import express, { Express, Request, Response } from "express";
import cors from "cors";
import { ResponseDto } from "./constants/response.dto";
import { RESPONSE } from "./utils/response.utils";
import { DATABASE_CONNECTION } from "./config/db.config";
import { AboutRoute } from "./modules/about-modules/routes/about.route";
const PORT: number =
  process.env.PORT !== undefined ? parseInt(process.env.PORT) : 5000;
const app: Express = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", async (req: Request, res: Response): Promise<void> => {
  let response: Awaited<ResponseDto> = await RESPONSE(
    200,
    {},
    "Server up and running!"
  );
  res.status(response.status).send(response);
});

//Routes:
app.use("/about", AboutRoute);

app.listen(PORT, async () => {
  await DATABASE_CONNECTION();
  console.log(`Listening to ${PORT}`);
});

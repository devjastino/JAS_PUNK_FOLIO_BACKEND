import { Router, Request, Response } from "express";
import PortfolioController from "../controllers/portfolio.controller";
import { ResponseDto } from "../../../constants/response.dto";
const PortfolioRoute: Router = Router();

PortfolioRoute.post("/", async (req: Request, res: Response): Promise<void> => {
  let response: Awaited<ResponseDto> = await PortfolioController.create(req.body);
  res.status(response.status).send(response);
});

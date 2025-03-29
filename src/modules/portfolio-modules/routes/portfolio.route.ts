import { Router, Request, Response } from "express";
import PortfolioController from "../controllers/portfolio.controller";
import { ResponseDto } from "../../../constants/response.dto";
export const PortfolioRoute: Router = Router();

PortfolioRoute.post("/", async (req: Request, res: Response): Promise<void> => {
  let response: Awaited<ResponseDto> = await PortfolioController.create(
    req.body
  );
  res.status(response.status).send(response);
});

PortfolioRoute.get("/", async (req: Request, res: Response): Promise<void> => {
  let response: Awaited<ResponseDto> = await PortfolioController.getAll();
  res.status(response.status).send(response);
});

PortfolioRoute.get(
  "/:id",
  async (req: Request, res: Response): Promise<void> => {
    let response: Awaited<ResponseDto> = await PortfolioController.getOne(
      req.params.id
    );
    res.status(response.status).send(response);
  }
);

PortfolioRoute.delete(
  "/:id",
  async (req: Request, res: Response): Promise<void> => {
    let response: Awaited<ResponseDto> = await PortfolioController.deleteOne(
      req.params.id
    );
    res.status(response.status).send(response);
  }
);

PortfolioRoute.put(
  "/:id",
  async (req: Request, res: Response): Promise<void> => {
    let response: Awaited<ResponseDto> = await PortfolioController.updateOne(
      req.params.id,
      req.body
    );
    res.status(response.status).send(response);
  }
);

import { Router, Request, Response } from "express";
import AboutController from "../controllers/about.controller";
import { ResponseDto } from "../../../constants/response.dto";
export const AboutRoute: Router = Router();

AboutRoute.post("/", async (req: Request, res: Response): Promise<void> => {
  let response: Awaited<ResponseDto> = await AboutController.create(req.body);
  res.status(response.status).send(response);
});

AboutRoute.get("/", async (req: Request, res: Response): Promise<void> => {
  let response: Awaited<ResponseDto> = await AboutController.getAll();
  res.status(response.status).send(response);
});

AboutRoute.get("/:id", async (req: Request, res: Response): Promise<void> => {
  let response: Awaited<ResponseDto> = await AboutController.getOne(
    req.params.id
  );
  res.status(response.status).send(response);
});

AboutRoute.put("/:id", async (req: Request, res: Response): Promise<void> => {
  let response: Awaited<ResponseDto> = await AboutController.updateOne(
    req.params.id,
    req.body
  );
  res.status(response.status).send(response);
});

AboutRoute.delete(
  "/:id",
  async (req: Request, res: Response): Promise<void> => {
    let response: Awaited<ResponseDto> = await AboutController.deleteOne(
      req.params.id
    );
    res.status(response.status).send(response);
  }
);

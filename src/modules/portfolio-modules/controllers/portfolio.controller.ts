import { ResponseDto } from "../../../constants/response.dto";
import { CreatePortfolioDto } from "../dto/portfolio.dto";
import PortfolioService from "../services/portfolio.service";

class PortfolioController {
  async create(createPortfolioDto: CreatePortfolioDto): Promise<ResponseDto> {
    let response: Awaited<ResponseDto> = await PortfolioService.create(
      createPortfolioDto
    );
    return response;
  }

  async getAll(): Promise<ResponseDto> {
    let response: Awaited<ResponseDto> = await PortfolioService.getAll();
    return response;
  }

  async getOne(id: string): Promise<ResponseDto> {
    let response: Awaited<ResponseDto> = await PortfolioService.getOne(id);
    return response;
  }

  async deleteOne(id: string) {
    let response: Awaited<ResponseDto> = await PortfolioService.deleteOne(id);
    return response;
  }

  async updateOne(
    id: string,
    createPortfolioDto: CreatePortfolioDto
  ): Promise<ResponseDto> {
    let response: Awaited<ResponseDto> = await PortfolioService.updateOne(
      id,
      createPortfolioDto
    );
    return response;
  }
}

export default new PortfolioController();

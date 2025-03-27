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
}

export default new PortfolioController();

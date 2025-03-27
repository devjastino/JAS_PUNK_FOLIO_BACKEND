import { ResponseDto } from "../../../constants/response.dto";
import { Portfolio } from "../../../database/models/Portfolio";
import { RESPONSE } from "../../../utils/response.utils";
import { CreatePortfolioDto } from "../dto/portfolio.dto";

class PortfolioService {
  async create(createPortfolioDto: CreatePortfolioDto): Promise<ResponseDto> {
    try {
      let response: Awaited<object | null> = await Portfolio.create(
        createPortfolioDto
      );
      if (response == null) {
        return RESPONSE(400, {}, "Failed to Create!");
      }
      return RESPONSE(201, response, "Created Successfully!");
    } catch (err: any) {
      return RESPONSE(500, err, "Internal Server Error!");
    }
  }

  async getAll() {
    try {
      
    } catch (err: any) {
      return RESPONSE(500, err, "Internal Server Error!");
    }
  }
}

export default new PortfolioService();

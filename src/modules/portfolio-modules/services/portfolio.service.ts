import { ResponseDto } from "../../../constants/response.dto";
import { Portfolio } from "../../../database/models/Portfolio";
import { RESPONSE } from "../../../utils/response.utils";
import {
  CreatePortfolioDto,
  PortfolioDto,
  UpdatePortfolioDto,
} from "../dto/portfolio.dto";

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
      let response: Awaited<PortfolioDto[]> = await Portfolio.find();
      if (response.length == 0) {
        return RESPONSE(404, [], "Not Found!");
      }
      return RESPONSE(200, response, "Found Successfully!");
    } catch (err: any) {
      return RESPONSE(500, err, "Internal Server Error!");
    }
  }

  async getOne(id: string) {
    try {
      let response = await Portfolio.findOne({ _id: id });
      if (response == null) {
        return RESPONSE(404, {}, "Not Found!");
      }
      return RESPONSE(200, response, "Found Successfully!");
    } catch (err: any) {
      return RESPONSE(500, err, "Internal Server Error!");
    }
  }

  async updateOne(id: string, updatePortfolioDto: UpdatePortfolioDto) {
    try {
      let exists = await this.getOne(id);
      if (exists.status != 200) {
        return exists;
      }
      let update = await Portfolio.updateOne({ _id: id }, updatePortfolioDto);
      if (update == null) {
        return RESPONSE(400, {}, "Failed to Update!");
      }
      let response = await this.getOne(id);
      return response;
    } catch (err: any) {
      return RESPONSE(500, err, "Internal Server Error!");
    }
  }

  async deleteOne(id: string) {
    try {
      let exists = await this.getOne(id);
      if (exists.status != 200) {
        return exists;
      }
      let deleteData = await Portfolio.deleteOne({ _id: id });
      if (deleteData == null) {
        return RESPONSE(400, {}, "Failed to Delete!");
      }
      return RESPONSE(200, {}, "Delete Successfully!");
    } catch (err: any) {
      return RESPONSE(500, err, "Internal Server Error!");
    }
  }
}

export default new PortfolioService();

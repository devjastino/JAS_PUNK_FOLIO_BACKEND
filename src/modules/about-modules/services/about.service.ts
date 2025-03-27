import { ResponseDto } from "../../../constants/response.dto";
import { About } from "../../../database/models/About";
import { RESPONSE } from "../../../utils/response.utils";
import { AboutDto, CreateAboutDto, UpdateAboutDto } from "../dto/about.dto";

class AboutService {
  async create(createAboutDto: CreateAboutDto): Promise<ResponseDto> {
    try {
      let response: Awaited<object | null> = await About.create(createAboutDto);
      if (response == null) {
        return RESPONSE(400, {}, "Failed to Create!");
      }
      return RESPONSE(201, response, "Created Successfully!");
    } catch (err: any) {
      return RESPONSE(500, err, "Internal Server Error!");
    }
  }

  async getAll(): Promise<ResponseDto> {
    try {
      let response: Awaited<AboutDto[]> = await About.find();
      if (response.length == 0) {
        return RESPONSE(404, [], "Not Found!");
      }
      return RESPONSE(200, response, "Found Successfully!");
    } catch (err: any) {
      return RESPONSE(500, err, "Internal Server Error!");
    }
  }

  async getOne(id: string): Promise<ResponseDto> {
    try {
      let response: Awaited<AboutDto | null> = await About.findOne({ _id: id });
      if (response == null) {
        return RESPONSE(404, {}, "Not Found!");
      }
      return RESPONSE(200, response, "Found Successfully!");
    } catch (err: any) {
      return RESPONSE(500, err, "Internal Server Error!");
    }
  }

  async updateOne(
    id: string,
    updateAboutDto: UpdateAboutDto
  ): Promise<ResponseDto> {
    try {
      let exists: Awaited<ResponseDto> = await this.getOne(id);
      if (exists.status !== 200) {
        return exists;
      }
      let update = await About.updateOne({ _id: id }, updateAboutDto);
      if (update == null) {
        return RESPONSE(400, {}, "Failed to Update!");
      }
      let data: Awaited<ResponseDto> = await this.getOne(id);
      return data;
    } catch (err: any) {
      return RESPONSE(500, err, "Internal Server Error!");
    }
  }

  async deleteOne(id: string): Promise<ResponseDto> {
    try {
      let exists: Awaited<ResponseDto> = await this.getOne(id);
      if (exists.status !== 200) {
        return exists;
      }
      let deleteData = await About.deleteOne({ _id: id });
      if (deleteData == null) {
        return RESPONSE(400, {}, "Failed to Delete!");
      }
      return RESPONSE(200, {}, "Deleted Successfully!");
    } catch (err: any) {
      return RESPONSE(500, err, "Internal Server Error!");
    }
  }
}

export default new AboutService();

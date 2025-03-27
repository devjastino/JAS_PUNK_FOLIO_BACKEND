import { ResponseDto } from "../../../constants/response.dto";
import { CreateAboutDto, UpdateAboutDto } from "../dto/about.dto";
import AboutService from "../services/about.service";

class AboutController {
  async create(createAboutDto: CreateAboutDto): Promise<ResponseDto> {
    let response: Awaited<ResponseDto> = await AboutService.create(
      createAboutDto
    );
    return response;
  }

  async getAll(): Promise<ResponseDto> {
    let response: Awaited<ResponseDto> = await AboutService.getAll();
    return response;
  }

  async getOne(id: string): Promise<ResponseDto> {
    let response: Awaited<ResponseDto> = await AboutService.getOne(id);
    return response;
  }

  async updateOne(
    id: string,
    updateAboutDto: UpdateAboutDto
  ): Promise<ResponseDto> {
    let response: Awaited<ResponseDto> = await AboutService.updateOne(
      id,
      updateAboutDto
    );
    return response;
  }

  async deleteOne(id: string): Promise<ResponseDto> {
    let response: Awaited<ResponseDto> = await AboutService.deleteOne(id);
    return response;
  }
}

export default new AboutController();

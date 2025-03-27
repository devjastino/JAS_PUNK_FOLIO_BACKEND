import { ResponseDto } from "../constants/response.dto";

export const RESPONSE: Function = (
  status: number = 0,
  response: object = {},
  message: string = ""
): ResponseDto => {
  return { status: status, response: response, message: message };
};

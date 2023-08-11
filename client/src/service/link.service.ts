import { AxiosResponse } from "axios";
import { ILink } from "../interface/link.interface";
import { instance } from "./instance";

export class LinkService {
  static async createLink(link: string): Promise<AxiosResponse<ILink>> {
    const data = { originalLink: link }
    const response = await instance('/', {
      method: 'POST',
      data
    })

    return response
  }
}
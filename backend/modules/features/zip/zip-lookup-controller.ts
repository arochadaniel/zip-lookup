import { ZipLookupData, ZipLookupResponseDto } from "./types";

import { ApolloError } from "apollo-server";
import { ZipLookupRepository } from "./zip-lookup-repository";
import { mapZipLookupResponseToDto } from "./mappers";

export class ZipLookupController {
  private repository = new ZipLookupRepository();
  async get(data: ZipLookupData): Promise<ZipLookupResponseDto> {
    const res = await this.repository.get(data);

    if (res.status !== 200 || !res.data) {
      throw new ApolloError("zip lookup failed");
    }

    return mapZipLookupResponseToDto(res.data);
  }
}

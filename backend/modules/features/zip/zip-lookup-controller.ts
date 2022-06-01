import { ZipLookupData, ZipLookupResponseDto } from "./types";

import { ApolloError } from "apollo-server";
import { ZipLookupRepository } from "./zip-lookup-repository";
import isEmpty from "lodash/isEmpty";
import { mapZipLookupResponseToDto } from "./mappers";

export class ZipLookupController {
  private repository = new ZipLookupRepository();
  async get(data: ZipLookupData): Promise<ZipLookupResponseDto> {
    try {
      const res = await this.repository.get(data);

      if (res.status !== 200 || !res.data || isEmpty(res.data)) {
        throw new ApolloError(
          "It seems the data you were looking for does not exist...",
          "NotFound"
        );
      }

      return mapZipLookupResponseToDto(res.data);
    } catch (error) {
      throw new ApolloError(
        "It seems the data you were looking for does not exist or the server request failed..."
      );
    }
  }
}

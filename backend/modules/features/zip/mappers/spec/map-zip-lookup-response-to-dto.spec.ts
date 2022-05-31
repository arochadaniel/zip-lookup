import {
  mockZipLookupResponse,
  mockZipLookupResponseDto
} from "@features/zip/spec/fixtures";

import { mapZipLookupResponseToDto } from "../map-zip-lookup-response-to-dto";

describe("mapZipLookupResponseToDto", () => {
  it("should map response to dto correctly", () => {
    const dto = mapZipLookupResponseToDto(mockZipLookupResponse);
    expect(dto).toEqual(mockZipLookupResponseDto);
  });
});

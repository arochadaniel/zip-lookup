import { mockZipLookupResponse, mockZipLookupResponseDto } from "./fixtures";

import { ApolloError } from "apollo-server";
import { ZipLookupController } from "../zip-lookup-controller";

const mockResponse = jest
  .fn()
  .mockReturnValue({ status: 200, data: mockZipLookupResponse });

jest.mock("../zip-lookup-repository", () => {
  return {
    ZipLookupRepository: class {
      get() {
        return mockResponse();
      }
    }
  };
});

describe("ZipLookupController", () => {
  it("should get dto response correctly from repository", async () => {
    const dto = await new ZipLookupController().get({
      country: mockZipLookupResponseDto.country,
      zipCode: mockZipLookupResponseDto.postCode
    });

    expect(dto).toEqual(mockZipLookupResponseDto);
  });

  it("should throw an error if the request fails", async () => {
    mockResponse.mockReturnValue({ status: 400, data: undefined });

    try {
      await new ZipLookupController().get({
        country: mockZipLookupResponseDto.country,
        zipCode: mockZipLookupResponseDto.postCode
      });
    } catch (error: unknown) {
      const apolloError = error as ApolloError;
      expect(apolloError).toBeTruthy();
    }
  });
});

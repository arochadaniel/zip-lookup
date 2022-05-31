import { ZipLookupResponse, ZipLookupResponseDto } from "../types";

export const mapZipLookupResponseToDto = (
  response: ZipLookupResponse
): ZipLookupResponseDto => {
  return {
    ...response,
    countryAbbreviation: response["country abbreviation"],
    postCode: response["post code"],
    places: response.places.map((p) => {
      return {
        ...p,
        stateAbbreviation: p["state abbreviation"],
        placeName: p["place name"]
      };
    })
  };
};

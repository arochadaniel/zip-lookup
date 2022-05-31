import { ZipLookupResponse, ZipLookupResponseDto } from "../types";

export const mapZipLookupResponseToDto = (
  response: ZipLookupResponse
): ZipLookupResponseDto => {
  return {
    countryAbbreviation: response["country abbreviation"],
    postCode: response["post code"],
    country: response.country,
    places: response.places.map((p) => {
      return {
        latitude: p.latitude,
        longitude: p.longitude,
        state: p.state,
        stateAbbreviation: p["state abbreviation"],
        placeName: p["place name"]
      };
    })
  };
};

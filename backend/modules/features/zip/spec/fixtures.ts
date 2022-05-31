import { ZipLookupResponse, ZipLookupResponseDto } from "../types";

export const mockZipLookupResponse: ZipLookupResponse = {
  country: "United States",
  "country abbreviation": "us",
  "post code": "90210",
  places: [
    {
      state: "California",
      latitude: "34.0901",
      longitude: "-118.4065",
      "place name": "Beverly Hills",
      "state abbreviation": "CA"
    }
  ]
};

export const mockZipLookupResponseDto: ZipLookupResponseDto = {
  country: "United States",
  countryAbbreviation: "us",
  postCode: "90210",
  places: [
    {
      state: "California",
      latitude: "34.0901",
      longitude: "-118.4065",
      placeName: "Beverly Hills",
      stateAbbreviation: "CA"
    }
  ]
};

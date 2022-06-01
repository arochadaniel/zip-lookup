import { ZipLookupResponseDto } from "../types";

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

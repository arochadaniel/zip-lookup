import { ZipLookupResponsePlaceDto } from "./zip-lookup-response-place";

export type ZipLookupResponseDto = {
  country: string;
  countryAbbreviation: string;
  places: ZipLookupResponsePlaceDto[];
  postCode: string;
};

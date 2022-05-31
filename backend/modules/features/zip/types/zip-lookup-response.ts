import {
  ZipLookupResponsePlace,
  ZipLookupResponsePlaceDto
} from "./zip-lookup-response-place";

export type ZipLookupResponse = {
  country: string;
  "country abbreviation": string;
  places: ZipLookupResponsePlace[];
  "post code": string;
};

export type ZipLookupResponseDto = {
  country: string;
  countryAbbreviation: string;
  places: ZipLookupResponsePlaceDto[];
  postCode: string;
};

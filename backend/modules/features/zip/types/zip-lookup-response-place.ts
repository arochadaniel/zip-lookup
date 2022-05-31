export type ZipLookupResponsePlace = {
  state: string;
  latitude: string;
  longitude: string;
  "place name": string;
  "state abbreviation": string;
};

export type ZipLookupResponsePlaceDto = {
  state: string;
  latitude: string;
  longitude: string;
  placeName: string;
  stateAbbreviation: string;
};

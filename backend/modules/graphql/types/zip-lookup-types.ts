import { gql } from "apollo-server";

export const zipLookupTypes = gql`
  type ZipCodeInfoPlace {
    latitude: String
    longitude: String
    placeName: String
    state: String
    stateAbbreviation: String
  }

  type ZipCodeInfo {
    country: String
    countryAbbreviation: String
    places: [ZipCodeInfoPlace]
    postCode: String
  }

  type Query {
    getZipCodeInfo(zipCode: String, country: String): ZipCodeInfo
  }
`;

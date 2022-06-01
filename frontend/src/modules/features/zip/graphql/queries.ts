import { gql } from "@apollo/client";

export const GET_ZIP_CODE_INFO = gql`
  query GetZipCodeInfo($zipCode: String, $country: String) {
    info: getZipCodeInfo(zipCode: $zipCode, country: $country) {
      country
      countryAbbreviation
      places {
        latitude
        longitude
        placeName
        state
        stateAbbreviation
      }
      postCode
    }
  }
`;

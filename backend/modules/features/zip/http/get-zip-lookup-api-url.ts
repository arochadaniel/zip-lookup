import { ZIPPOPOTAM_BASE_API_URL } from "./constants";

export const getZipLookupApiUrl = (
  zipCode: string | number,
  country: string
) => {
  return `${ZIPPOPOTAM_BASE_API_URL}/${country}/${zipCode}`;
};

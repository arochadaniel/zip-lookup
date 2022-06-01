import { ApolloError, useLazyQuery } from "@apollo/client";

import { GET_ZIP_CODE_INFO } from "../../../graphql/queries";
import { GetZipCodeInfoReturn } from "./types";
import { ZipLookupData } from "../../../types";
import { appendZipLookupToHistory } from "../../../history/crud/create";
import cloneDeep from "lodash/cloneDeep";
import { useCallback } from "react";

export interface UseGetZipCodeInfoReturn {
  onSubmit: (data: ZipLookupData) => void;
  error: ApolloError | undefined;
  data: GetZipCodeInfoReturn | undefined;
  loading: boolean;
}

export const useGetZipCodeInfo = (): UseGetZipCodeInfoReturn => {
  const [getInfo, { data, loading, error }] = useLazyQuery<
    GetZipCodeInfoReturn,
    ZipLookupData
  >(GET_ZIP_CODE_INFO);

  const onSubmit = useCallback(async (variables: ZipLookupData) => {
    const { data } = await getInfo({ variables });
    if (data) {
      appendZipLookupToHistory(cloneDeep(data.info));
    }
  }, []);

  return { onSubmit, data, loading, error };
};

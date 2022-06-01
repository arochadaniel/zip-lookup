import { ZipLookupResponseDto } from "../../../types";
import cloneDeep from "lodash/cloneDeep";
import { zipLookupHistoryMemory } from "../../memory";

export const appendZipLookupToHistory = (lookup: ZipLookupResponseDto) => {
  const current = zipLookupHistoryMemory();

  const newHistory = cloneDeep(current);
  newHistory.unshift(lookup);

  if (newHistory.length > 5) {
    newHistory.splice(5);
  }

  return zipLookupHistoryMemory(newHistory);
};

import cloneDeep from "lodash/cloneDeep";
import { zipLookupHistoryMemory } from "../../../memory";

export const deleteZipLookupHistoryEntry = (position: number) => {
  const current = zipLookupHistoryMemory();

  if (current.length === 1) {
    return zipLookupHistoryMemory([]);
  }

  const newHistory = cloneDeep(current);
  newHistory.splice(position, 1);

  return zipLookupHistoryMemory(newHistory);
};

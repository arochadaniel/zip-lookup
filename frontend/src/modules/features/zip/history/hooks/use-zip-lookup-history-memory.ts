import { useReactiveVar } from "@apollo/client";
import { zipLookupHistoryMemory } from "../memory";

export const useZipLookupHistoryMemory = () => {
  return useReactiveVar(zipLookupHistoryMemory);
};

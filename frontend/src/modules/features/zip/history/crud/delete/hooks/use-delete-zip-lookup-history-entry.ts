import { deleteZipLookupHistoryEntry } from "../utils";
import { useCallback } from "react";

export const useDeleteZipLookupHistoryEntry = () => {
  const onSubmit = useCallback((position: number) => {
    deleteZipLookupHistoryEntry(position);
  }, []);

  return { onSubmit };
};

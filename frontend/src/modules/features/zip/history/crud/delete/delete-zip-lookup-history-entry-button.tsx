import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { FC } from "react";
import { useDeleteZipLookupHistoryEntry } from "./hooks";

interface Props {
  position: number;
}

export const DeleteZipLookupHistoryEntryButton: FC<Props> = ({ position }) => {
  const { onSubmit } = useDeleteZipLookupHistoryEntry();
  return (
    <Button
      size="small"
      color="error"
      variant="outlined"
      startIcon={<Delete />}
      onClick={() => onSubmit(position)}
    >
      Delete from history
    </Button>
  );
};

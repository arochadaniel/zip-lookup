import { Card, Typography } from "@mui/material";

import { FC } from "react";
import { ZipLookupHistoryEntries } from "./zip-lookup-history-entries";
import { useZipLookupHistoryMemory } from "../../hooks";

interface Props {}

export const ZipLookupHistory: FC<Props> = () => {
  const history = useZipLookupHistoryMemory();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 3,
        minWidth: "80%",
        maxHeight: "500px",
        overflow: "auto"
      }}
    >
      <Typography variant="h6" gutterBottom>
        Search history
      </Typography>
      {history.length ? (
        <ZipLookupHistoryEntries history={history} />
      ) : (
        <Typography>It seems you have not look for anything...</Typography>
      )}
    </Card>
  );
};

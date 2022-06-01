import { CircularProgress, Typography } from "@mui/material";

import { FC } from "react";
import { UseGetZipCodeInfoReturn } from "./hooks";
import { ZipLookupHistoryContent } from "./history/crud/read/mapper/item";

type Props = Omit<UseGetZipCodeInfoReturn, "onSubmit">;

export const ZipLookupResultView: FC<Props> = ({ data, loading, error }) => {
  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Typography variant="body1" color="error">
        {error.message}
      </Typography>
    );
  }

  if (!data) {
    return null;
  }

  return <ZipLookupHistoryContent entry={data.info} />;
};

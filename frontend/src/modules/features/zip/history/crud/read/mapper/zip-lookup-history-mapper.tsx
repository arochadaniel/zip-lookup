import { FC, Fragment } from "react";

import { Box } from "@mui/material";
import { DeleteZipLookupHistoryEntryButton } from "../../delete";
import { ZipLookupHistoryContent } from "./item";
import { ZipLookupResponseDto } from "../../../../types";

interface Props {
  history: ZipLookupResponseDto[];
}

export const ZipLookupHistoryMapper: FC<Props> = ({ history }) => {
  return (
    <Fragment>
      {history.map((entry, i) => {
        return (
          <Box
            gap={1}
            display={"flex"}
            flexDirection={"column"}
            key={`${entry.postCode}-${i}`}
            marginBottom={2}
          >
            <ZipLookupHistoryContent entry={entry} />
            <DeleteZipLookupHistoryEntryButton position={i} />
          </Box>
        );
      })}
    </Fragment>
  );
};

import { Box } from "@mui/material";
import { FC } from "react";
import { ZipLookupHistoryMapper } from "./mapper";
import { ZipLookupResponseDto } from "../../../types";

interface Props {
  history: ZipLookupResponseDto[];
}

export const ZipLookupHistoryEntries: FC<Props> = ({ history }) => {
  return (
    <Box gap={1} display={"flex"} flexDirection={"column"}>
      <ZipLookupHistoryMapper history={history} />
    </Box>
  );
};

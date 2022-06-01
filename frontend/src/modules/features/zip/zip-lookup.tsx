import { Box, useMediaQuery, useTheme } from "@mui/material";

import { FC } from "react";
import { ZipLookupHistory } from "./history/crud/read";
import { ZipLookupPresenter } from "./zip-lookup-presenter";

export const ZipLookup: FC = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        display: "grid",
        flexDirection: "column",
        gridTemplateRows: mobile ? "1fr 1fr" : "1fr",
        gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
        placeSelf: "center",
        placeContent: "center",
        justifyItems: "center",
        alignItems: mobile ? "baseline" : "center",
        gap: 3,
        width: "100vw",
        height: mobile ? "100%" : "100vh",
        marginTop: mobile ? 5 : 0,
        marginBottom: mobile ? 5 : 0
      }}
    >
      <ZipLookupPresenter />
      <ZipLookupHistory />
    </Box>
  );
};

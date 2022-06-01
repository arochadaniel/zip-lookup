import { Box, Typography } from "@mui/material";

import { FC } from "react";
import { ZipLookupResponseDto } from "../../../../../types";

interface Props {
  entry: ZipLookupResponseDto;
}

export const ZipLookupHistoryContent: FC<Props> = ({ entry }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        borderStyle: "solid",
        borderRadius: 2,
        borderColor: (t) => t.palette.divider,
        borderWidth: 1,
        padding: 2
      }}
    >
      <Typography gutterBottom>
        {entry.country} ({entry.countryAbbreviation})
      </Typography>
      <Typography gutterBottom>Postal code: {entry.postCode}</Typography>
      <Box>
        <Typography fontWeight={700} gutterBottom>
          Places:
        </Typography>
        {entry.places.map((p, i) => {
          return (
            <Box
              key={`${p.placeName}-${i}`}
              sx={{
                borderStyle: "solid",
                borderRadius: 2,
                borderColor: (t) => t.palette.divider,
                borderWidth: 1,
                padding: 2
              }}
            >
              <Typography>Name: {p.placeName}</Typography>
              <Typography>Latitude: {p.latitude}</Typography>
              <Typography>Longitude: {p.longitude}</Typography>
              <Typography>
                State: {p.state} ({p.stateAbbreviation})
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

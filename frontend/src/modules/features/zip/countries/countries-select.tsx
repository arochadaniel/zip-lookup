import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps
} from "@mui/material";
import { FC, useCallback } from "react";

import { ZipLookupData } from "../types";
import { useAllRestCountries } from "./hooks";

interface Props {
  onChange: (country: ZipLookupData["country"]) => void;
  value: ZipLookupData["country"];
}

export const CountriesSelect: FC<Props> = ({ onChange, value }) => {
  const { countries, loading } = useAllRestCountries();

  const handleChange = useCallback<NonNullable<SelectProps["onChange"]>>(
    (e) => {
      onChange(e.target.value as ZipLookupData["country"]);
    },
    [onChange]
  );

  if (loading) {
    return <CircularProgress />;
  }

  if (!countries.length) {
    return null;
  }

  return (
    <FormControl>
      <InputLabel id={"country"}>Country</InputLabel>
      <Select
        onChange={handleChange}
        labelId="country"
        label="Country"
        value={value}
      >
        {countries.map(({ name: { common }, cca2, flag }) => (
          <MenuItem key={common} value={cca2.toLowerCase()}>
            {common} {flag}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

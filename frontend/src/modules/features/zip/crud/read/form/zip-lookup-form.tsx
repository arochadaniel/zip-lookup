import { Box, Button, TextField } from "@mui/material";
import { FC, useMemo } from "react";

import { CountriesSelect } from "../../../countries";
import { Send } from "@mui/icons-material";
import { ZipLookupData } from "../../../types";
import { useForm } from "react-hook-form";

interface Props {
  onSubmit: (data: ZipLookupData) => void;
}

export const ZIP_CODE_TEXT_FIELD_PLACEHOLDER = "Enter zip code";

export const ZipLookupForm: FC<Props> = ({ onSubmit: propsOnSubmit }) => {
  const { handleSubmit, setValue, watch, register } = useForm<ZipLookupData>({
    defaultValues: { country: "us", zipCode: "" }
  });

  const country = watch("country");

  const onSubmit = useMemo(() => {
    return handleSubmit((data) => propsOnSubmit(data));
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <Box
        gap={2}
        display={"flex"}
        flexDirection="column"
        sx={{ placeContent: "center" }}
      >
        <CountriesSelect
          onChange={(c) => setValue("country", c)}
          value={country}
        />
        <TextField
          label={ZIP_CODE_TEXT_FIELD_PLACEHOLDER}
          placeholder={ZIP_CODE_TEXT_FIELD_PLACEHOLDER}
          fullWidth
          {...register("zipCode")}
        />
        <Button
          variant="contained"
          startIcon={<Send />}
          type="submit"
          color="primary"
        >
          Search
        </Button>
      </Box>
    </form>
  );
};

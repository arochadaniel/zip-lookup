import { Card } from "@mui/material";
import { FC } from "react";
import { ZipLookupForm } from "./form";
import { ZipLookupResultView } from "./zip-lookup-result-view";
import { useGetZipCodeInfo } from "./hooks";

interface Props {}

export const ZipLookupPresenter: FC<Props> = () => {
  const { onSubmit, ...rest } = useGetZipCodeInfo();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        padding: 3,
        minWidth: "80%",
        overflow: "auto"
      }}
    >
      <ZipLookupForm onSubmit={onSubmit} />
      <ZipLookupResultView {...rest} />
    </Card>
  );
};

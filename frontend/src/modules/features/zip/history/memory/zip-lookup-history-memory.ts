import { ZipLookupResponseDto } from "../../types";
import { makeVar } from "@apollo/client";

export const zipLookupHistoryMemory = makeVar<ZipLookupResponseDto[]>([]);

import { ZipLookupData, ZipLookupResponse } from "./types";

import axios from "axios";
import { getZipLookupApiUrl } from "./http";

export class ZipLookupRepository {
  private http = axios;
  get({ zipCode, country }: ZipLookupData) {
    const url = getZipLookupApiUrl(zipCode, country);
    return this.http.get<ZipLookupResponse>(url);
  }
}

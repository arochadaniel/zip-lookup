import { ZipLookupController } from "@features/zip";
import { ZipLookupData } from "@features/zip/types";

const controller = new ZipLookupController();

export const zipLookupResolvers = {
  Query: {
    getZipCodeInfo: (_: any, data: ZipLookupData) => {
      return controller.get(data);
    }
  }
};

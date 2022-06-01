import { RenderResult, act, fireEvent } from "@testing-library/react";
import {
  ZIP_CODE_SUBMIT_BUTTON_TEST_ID,
  ZIP_CODE_TEXT_FIELD_PLACEHOLDER
} from "../form";

import { mockZipLookupResponseDto } from "../../../spec/fixtures";

export const testSubmitZipLookup = (wrapper: RenderResult) => {
  return act(async () => {
    const zipCodeInput = wrapper.getByPlaceholderText(
      ZIP_CODE_TEXT_FIELD_PLACEHOLDER
    );

    fireEvent.input(zipCodeInput, {
      target: { value: mockZipLookupResponseDto.postCode }
    });

    const button = wrapper.getByTestId(ZIP_CODE_SUBMIT_BUTTON_TEST_ID);
    fireEvent.click(button);
  });
};

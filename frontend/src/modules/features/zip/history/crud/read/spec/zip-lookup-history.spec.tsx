import {
  BaseMockComponentProps,
  BaseMockedComponent
} from "../../../../../../testing";
import { NO_HISTORY_MESSAGE, ZipLookupHistory } from "../zip-lookup-history";
import { act, fireEvent, render, waitFor } from "@testing-library/react";

import { FC } from "react";
import { appendZipLookupToHistory } from "../../create";
import { mockZipLookupResponseDto } from "../../../../spec/fixtures";
import { zipLookupHistoryMemory } from "../../../memory";

describe("<ZipLookupHistory />", () => {
  const Component: FC<BaseMockComponentProps> = (props) => {
    return (
      <BaseMockedComponent {...props}>
        <ZipLookupHistory />
      </BaseMockedComponent>
    );
  };

  it("should render without crashing", () => {
    const wrapper = render(<Component />);
    wrapper.unmount();
  });

  describe("business rules", () => {
    it("should show is empty message", async () => {
      const wrapper = render(<Component />);
      const noHistory = wrapper.queryByText(NO_HISTORY_MESSAGE);
      expect(noHistory).toBeTruthy();
    });

    it("should show entry if appended message", async () => {
      const wrapper = render(<Component />);

      act(() => {
        zipLookupHistoryMemory([]);
        appendZipLookupToHistory(mockZipLookupResponseDto);
      });

      const entry = wrapper.queryByText(
        new RegExp(`${mockZipLookupResponseDto.country}`)
      );
      expect(entry).toBeTruthy();
    });

    it("should delete entry if button is clicked", async () => {
      const wrapper = render(<Component />);

      act(() => {
        zipLookupHistoryMemory([]);
        appendZipLookupToHistory(mockZipLookupResponseDto);
        const button = wrapper.getByRole("button");
        fireEvent.click(button);
      });

      const entry = wrapper.queryByText(
        new RegExp(`${mockZipLookupResponseDto.country}`)
      );
      await waitFor(() => {
        expect(entry).toBeFalsy();
      });
    });
  });
});

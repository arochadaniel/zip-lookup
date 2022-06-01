import {
  BaseMockComponentProps,
  BaseMockedComponent
} from "../../../../../testing/components";
import { render, waitFor } from "@testing-library/react";

import { FC } from "react";
import { GET_ZIP_CODE_INFO } from "../../../graphql/queries";
import { MockedResponse } from "@apollo/client/testing";
import { ZipLookupData } from "../../../types";
import { ZipLookupPresenter } from "../zip-lookup-presenter";
import { generateMockGraphQLError } from "../../../../../testing/utils";
import { mockZipLookupResponseDto } from "../../../spec/fixtures";
import { testSubmitZipLookup } from "./test-submit-zip-lookup";

describe("<ZipLookupPresenter />", () => {
  const Component: FC<BaseMockComponentProps> = (props) => {
    return (
      <BaseMockedComponent {...props}>
        <ZipLookupPresenter />
      </BaseMockedComponent>
    );
  };

  it("should render without crashing", () => {
    const wrapper = render(<Component />);
    wrapper.unmount();
  });

  describe("business rules", () => {
    const variables: ZipLookupData = {
      country: mockZipLookupResponseDto.countryAbbreviation,
      zipCode: mockZipLookupResponseDto.postCode
    };

    const request: MockedResponse["request"] = {
      query: GET_ZIP_CODE_INFO,
      variables
    };

    it("should show success message", async () => {
      const mocks: MockedResponse[] = [
        { request, result: { data: { info: mockZipLookupResponseDto } } }
      ];
      const wrapper = render(<Component mocks={mocks} />);

      await testSubmitZipLookup(wrapper);

      const success = wrapper.queryByText(
        new RegExp(`${mockZipLookupResponseDto.country}`)
      );

      await waitFor(() => {
        expect(success).toBeTruthy();
      });
    });

    it("should show error message", async () => {
      const error = generateMockGraphQLError();
      const mocks: MockedResponse[] = [
        { request, result: { errors: [error] } }
      ];
      const wrapper = render(<Component mocks={mocks} />);

      await testSubmitZipLookup(wrapper);

      const failure = wrapper.queryByText(error.message);
      await waitFor(() => {
        expect(failure).toBeTruthy();
      });
    });
  });
});

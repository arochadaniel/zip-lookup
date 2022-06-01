import { FC, ReactNode } from "react";
import {
  MockedProvider,
  MockedProviderProps,
  MockedResponse
} from "@apollo/client/testing";

import { InMemoryCache } from "@apollo/client";

export interface BaseMockComponentProps {
  cache?: any;
  mocks?: MockedResponse[];
  addTypename?: boolean;
  children?: ReactNode;
  MockedProviderProps?: MockedProviderProps;
}

export const BaseMockedComponent: FC<BaseMockComponentProps> = (props) => {
  const { MockedProviderProps, addTypename = false } = props;

  return (
    <MockedProvider
      mocks={props.mocks}
      addTypename={false}
      cache={new InMemoryCache({ addTypename })}
      {...MockedProviderProps}
    >
      {props.children}
    </MockedProvider>
  );
};

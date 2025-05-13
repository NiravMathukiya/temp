"use client";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./index"; // Ensure the store is correctly imported

type ProvidersProps = {
  children: ReactNode;
};

export const ReduxProviders: FC<ProvidersProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

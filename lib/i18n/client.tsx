"use client";

import { createContext, FC, PropsWithChildren, useContext } from "react";
import { translate } from "./shared";
import { Dictionary } from "./type";

export interface TranslationProviderData {
  dictionary: Dictionary;
}

const Context = createContext({} as TranslationProviderData);

export const TranslationProvider: FC<
  PropsWithChildren<TranslationProviderData>
> = ({ dictionary, children }) => {
  return <Context.Provider value={{ dictionary }}>{children}</Context.Provider>;
};

export const useTranslation = () => {
  const { dictionary } = useContext(Context);
  return translate(dictionary);
};

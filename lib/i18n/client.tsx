"use client";

import { createContext, FC, PropsWithChildren, useContext } from "react";
import { Dictionary, getDictionary, Locale, translate } from "./shared";

export interface TranslationProviderData {
  dictionary: Dictionary;
}

export interface TranslationProviderProps {
  locale: Locale;
}

const Context = createContext({} as TranslationProviderData);

export const TranslationProvider: FC<
  PropsWithChildren<TranslationProviderProps>
> = ({ locale, children }) => {
  const dictionary = getDictionary(locale);

  return <Context.Provider value={{ dictionary }}>{children}</Context.Provider>;
};

export const useTranslation = () => {
  const { dictionary } = useContext(Context);
  return translate(dictionary);
};

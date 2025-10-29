"use client";

import en from "./dictionary/en.json";
import de from "./dictionary/de.json";
import { createContext, FC, PropsWithChildren, useContext } from "react";

export type Dictionary = typeof en | typeof de;
export type Locale = "en" | "de";

const getDictionary = (locale: Locale) => (locale === "en" ? en : de);

export const isLocale = (locale: string): locale is Locale =>
  ["de", "en"].includes(locale);

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

  return (key: keyof Dictionary) => dictionary[key] ?? key;
};

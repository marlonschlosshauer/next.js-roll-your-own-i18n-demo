import { Dictionary, Locale } from "./type";

export const isLocale = (locale: string): locale is Locale =>
  ["de", "en"].includes(locale);

export const translate = (dictionary: Dictionary) => {
  return (key: keyof Dictionary) => dictionary[key] ?? key;
};

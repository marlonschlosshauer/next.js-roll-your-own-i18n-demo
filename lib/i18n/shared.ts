import en from "./dictionary/en.json";
import de from "./dictionary/de.json";

export type Dictionary = typeof en | typeof de;
export type Locale = "en" | "de";

export const getDictionary = (locale: Locale) => (locale === "en" ? en : de);

export const isLocale = (locale: string): locale is Locale =>
  ["de", "en"].includes(locale);

export const translate = (dictionary: Dictionary) => {
  return (key: keyof Dictionary) => dictionary[key] ?? key;
};

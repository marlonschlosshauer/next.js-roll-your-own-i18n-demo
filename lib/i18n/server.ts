import { translate } from "./shared";
import { Locale } from "./type";
import en from "./dictionary/en.json";
import de from "./dictionary/de.json";

export const getDictionary = (locale: Locale) => (locale === "en" ? en : de);

export const getTranslation = (locale: Locale) => {
  return translate(getDictionary(locale));
};

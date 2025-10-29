import { getDictionary, Locale, translate } from "./shared";

export const getTranslation = (locale: Locale) => {
  return translate(getDictionary(locale));
};

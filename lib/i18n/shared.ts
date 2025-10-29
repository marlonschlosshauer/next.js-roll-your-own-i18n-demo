import { Dictionary, Locale } from "./type";

export const isLocale = (locale: string): locale is Locale =>
  ["de", "en"].includes(locale);

export const translate = (dictionary: Dictionary) => {
  return (
    key: keyof Dictionary,
    instances?: Record<string, string | number>,
  ) => {
    const target = dictionary[key] ?? key;

    if (!instances) {
      return target;
    }

    return Object.entries(instances).map(([key, value]) =>
      target.replace(`{{${key}}}`, `${value}`),
    );
  };
};

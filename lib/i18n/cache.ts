import { cache } from "react";
import { Locale } from "./type";

const getCache = cache(() => {
  return new Map();
});

export function setLocale(locale: Locale) {
  getCache().set("locale", locale);
}

export function getLocale() {
  return getCache().get("locale");
}

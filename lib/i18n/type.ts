import en from "./dictionary/en.json";
import de from "./dictionary/de.json";

export type Dictionary = typeof en | typeof de;
export type Locale = "en" | "de";

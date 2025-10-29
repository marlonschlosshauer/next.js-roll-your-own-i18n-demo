import { FC } from "react";
import { getTranslation } from "@/lib/i18n/server";
import { Locale } from "@/lib/i18n/type";

export interface BarProps {
  locale: Locale;
}

export const Bar: FC<BarProps> = ({ locale }) => {
  const t = getTranslation(locale);

  return <p>{t("WELCOME_MESSAGE")}</p>;
};

"use client";

import { useTranslation } from "@/lib/i18n/client";

export const Foo = () => {
  const t = useTranslation();

  return <p>{t("MONTHLY_COST", { cost: 123 })}</p>;
};

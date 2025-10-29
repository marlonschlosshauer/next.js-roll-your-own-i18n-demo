import { isLocale, TranslationProvider } from "@/lib/i18n/client";
import { notFound } from "next/navigation";

export default async function LocaleLayout({
  params,
  children,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <TranslationProvider locale={locale}>{children}</TranslationProvider>;
}

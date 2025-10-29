import { TranslationProvider } from "@/lib/i18n/client";
import { getDictionary } from "@/lib/i18n/server";
import { isLocale } from "@/lib/i18n/shared";
import { notFound } from "next/navigation";

export default async function LocaleLayout({
  params,
  children,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return (
    <TranslationProvider dictionary={dictionary}>
      {children}
    </TranslationProvider>
  );
}

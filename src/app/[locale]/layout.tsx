import Layout from "@/components/Layout";
import { NextIntlClientProvider } from "next-intl";
import { locales } from "src/navigation";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { defaultMetadata } from "src/const/seo";

export const metadata: Metadata = defaultMetadata;

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Layout>{children}</Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

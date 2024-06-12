import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be import from a shared config
const locales = ["en", "ko"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}/strings.json`)).default,
  };
});

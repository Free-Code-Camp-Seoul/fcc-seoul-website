import Home from "./Home";
import { unstable_setRequestLocale } from "next-intl/server";
import { getMeetupInfo } from "src/services/meetup";
import { locales } from "src/navigation";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  params: { locale: string };
};

export default async function Page({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const events = await getMeetupInfo();

  return <Home eventList={events || []} />;
}

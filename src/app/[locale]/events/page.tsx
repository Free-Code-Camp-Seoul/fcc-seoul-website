import Events from "./Events";
import { unstable_setRequestLocale } from "next-intl/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
};

type Props = {
  params: { locale: string };
};

export default async function Page({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return <Events />;
}

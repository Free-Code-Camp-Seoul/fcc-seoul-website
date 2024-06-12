import Events from "./Events";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export default async function Page({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return <Events />;
}

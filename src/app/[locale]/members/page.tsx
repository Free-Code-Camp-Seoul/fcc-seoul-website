import Members from "./Members";
import { unstable_setRequestLocale } from "next-intl/server";
import { getMemberInfo } from "src/services/members";

type Props = {
  params: { locale: string };
};

export default async function Page({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const members = await getMemberInfo();

  return <Members memberList={members || []} />;
}

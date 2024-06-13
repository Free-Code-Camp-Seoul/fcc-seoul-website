import Members from "./Members";
import { unstable_setRequestLocale } from "next-intl/server";
import { getMemberInfo } from "src/services/members";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Members",
};

type Props = {
  params: { locale: string };
};

export default async function Page({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const members = await getMemberInfo();

  return <Members memberList={members || []} />;
}

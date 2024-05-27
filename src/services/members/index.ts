import { MEMBERS_API } from "@/const";

export interface MemberData {
  name: string;
  githubUrl: string;
  bio: string;
  imageUrl: string;
  interests: string[];
}

export const getMemberInfo = async (): Promise<MemberData[]> => {
  const res = await fetch(MEMBERS_API);
  const responseJSON = await res.json();
  const memberData = responseJSON.data;

  return memberData;
};

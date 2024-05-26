import { useTranslation } from "next-i18next";
import React, { Suspense } from "react";
import Loading from "./loading";
import dynamic from "next/dynamic";

import styles from "./Members.module.scss";
import { MemberData } from "src/services/members";

const DynamicMemberCard = dynamic(() => import("@/components/MemberCard"), {
  loading: () => <p>Loading...</p>,
});

interface MemberProps {
  memberList: MemberData[];
}

const Members = ({ memberList }: MemberProps) => {
  const { t } = useTranslation("members");
  return (
    <div className={styles.Members}>
      <h1 className={styles.Title}>{t("meet-members")}</h1>
      <Suspense fallback={<Loading />}>
        <div className={styles.Members}>
          {memberList.map((member) => (
            <DynamicMemberCard key={member.githubUrl} member={member} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Members;

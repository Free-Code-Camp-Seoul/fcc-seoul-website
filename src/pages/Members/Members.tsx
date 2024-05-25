import MemberCard from "@/components/MemberCard";
import { useTranslation } from "next-i18next";
import React from "react";

import styles from "./Members.module.scss";
import { MemberData } from "src/services/members";

interface MemberProps {
  memberList: MemberData[];
}

const Members = ({ memberList }: MemberProps) => {
  const { t } = useTranslation("members");
  return (
    <div className={styles.Members}>
      <h1 className={styles.Title}>{t("meet-members")}</h1>
      <div className={styles.Members}>
        {memberList.map((member) => (
          <MemberCard key={member.githubUrl} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Members;

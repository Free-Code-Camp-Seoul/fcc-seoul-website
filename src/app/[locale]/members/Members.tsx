"use client";

//import React from "react";
import { useTranslations } from "next-intl";
import styles from "./Members.module.scss";
import { NextSeo } from "next-seo";

import MemberCard from "../components/MemberCard";

import { MemberData } from "src/services/members";

interface MemberProps {
  memberList: MemberData[];
}

const Members = ({ memberList }: MemberProps) => {
  const t = useTranslations("members");

  return (
    <div className={styles.Members}>
      <h1 className={styles.Title}>{t("meet-members")}</h1>
      <div className={styles.Members}>
        {memberList.map((member) => (
          <MemberCard key={member.githubUrl} member={member} />
        ))}
      </div>
      <NextSeo title="Members" />
    </div>
  );
};

export default Members;

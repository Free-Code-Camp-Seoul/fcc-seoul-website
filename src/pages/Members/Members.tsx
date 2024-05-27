import { useTranslation } from "next-i18next";
import React from "react";

import styles from "./Members.module.scss";
import MemberCard from "@/components/MemberCard";
import { NextSeo } from "next-seo";

const Members = () => {
  const { t } = useTranslation("members");
  return (
    <div className={styles.Members}>
      <p className={styles.Title}>{t("meet-members")}</p>
      <div className={styles.Members}>
        {MEMBERS.map((member) => (
          <MemberCard key={member.github} member={member} />
        ))}
      </div>
      <NextSeo title="Members" />
    </div>
  );
};

const MEMBERS = [
  {
    name: "Andrei Calinescu",
    github: "https://github.com/drecali",
    bio: "I'm a software engineer and I love to build things.",
    image: "https://avatars.githubusercontent.com/u/24983797?v=4",
    interests: ["Web Development", "Machine Learning", "Data Science"],
  },
  {
    name: "Toby",
    github: "https://github.com/Tobio89",
    bio: "I'm a software engineer and I love to build things.",
    image: "https://avatars.githubusercontent.com/u/44494591?v=4",
    interests: ["Web Development", "Machine Learning", "Data Science"],
  },
  {
    name: "Simon Lee",
    github: "https://github.com/simonhlee97",
    bio: "I'm a software engineer and I love to build things.",
    image: "https://avatars.githubusercontent.com/u/22103041?v=4",
    interests: ["Web Development", "Machine Learning", "Data Science"],
  },
  {
    name: "Joe Mcgee",
    github: "https://github.com/joemcgee4151986",
    bio: "I'm a software engineer and I love to build things.",
    image: "https://avatars.githubusercontent.com/u/16703432?v=4",
    interests: ["Web Development", "Machine Learning", "Data Science"],
  },
  {
    name: "Ivan Saldano",
    github: "https://github.com/ivanms1",
    bio: "I'm a software engineer and I love to build things.",
    image: "https://avatars.githubusercontent.com/u/29688963?v=4",
    interests: ["Web Development", "Machine Learning", "Data Science"],
  },
];

export default Members;

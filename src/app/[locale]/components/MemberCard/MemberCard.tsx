//import React from "react";
import Image from "next/image";
import Link from "next/link";

import GithubIcon from "@/assets/icons/github-icon.svg";

import styles from "./MemberCard.module.scss";

interface MemberCardProps {
  member: {
    name: string;
    githubUrl: string;
    imageUrl: string;
    interests: string[];
    bio: string;
  };
}

const MemberCard = ({ member }: MemberCardProps) => {
  return (
    <div className={styles.MemberCard}>
      <Image
        className={styles.Avatar}
        width={70}
        height={70}
        src={member.imageUrl}
        alt={member.name}
      />
      <div className={styles.MemberInfo}>
        <p className={styles.Name}>{member.name}</p>
        <Link
          href={member.githubUrl}
          target="_blank"
          className={styles.GithubButton}
        >
          <GithubIcon className={styles.GithubIcon} />
        </Link>
      </div>
      <p className={styles.Bio}>{member.bio}</p>
      <div className={styles.Interests}>
        {member.interests.map((interest) => (
          <span key={interest} className={styles.Interest}>
            {interest}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MemberCard;

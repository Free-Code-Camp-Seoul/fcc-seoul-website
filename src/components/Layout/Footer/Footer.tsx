"use client";

import { useTranslations } from "next-intl";

import styles from "./Footer.module.scss";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  const t = useTranslations("footer");
  return (
    <div className={styles.Footer}>
      <p>{t("made-with-love")}</p>
    </div>
  );
};

export default Footer;

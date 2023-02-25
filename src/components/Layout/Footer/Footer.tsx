import React from "react";
import { useTranslation } from "next-i18next";

import styles from "./Footer.module.scss";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  const { t } = useTranslation("common");
  return (
    <div className={styles.Footer}>
      <p>{t("made-with-love")}</p>
    </div>
  );
};

export default Footer;

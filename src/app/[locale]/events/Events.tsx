"use client";

import { useTranslations } from "next-intl";
import styles from "./Events.module.scss";

const Events = () => {
  const t = useTranslations("events");
  return (
    <div className={styles.Events}>
      <h1 className={styles.Times}>{t("schedule")}</h1>
      <p className={styles.Location}>{t("address")}</p>
      <p className={styles.Description}>{t("description")}</p>
    </div>
  );
};

export default Events;

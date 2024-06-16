"use client";

import { useTranslations } from "next-intl";
import styles from "./Events.module.scss";

import Image from "next/image";

import meetupImage from "@/assets/images/fcc-location.jpg";
import kakaoMapsLogo from "@/assets/images/kakao-maps.png";
import naverMapsLogo from "@/assets/images/naver-maps.png";

const NAVER_MAPS_URL = "https://naver.me/xaC9isrW";
const KAKAO_MAPS_URL = "http://kko.to/fkhQtFpFz";

const Events = () => {
  const t = useTranslations("events");
  return (
    <div className={styles.Events}>
      <h1 className={styles.Times}>{t("schedule")}</h1>
      <Image alt="meetup location" className={styles.Image} src={meetupImage} />
      <p className={styles.Location}>{t("address")}</p>
      <div className={styles.MapLinks}>
        <a
          className={styles.MapLink}
          target="_blank"
          rel="noreferrer"
          href={KAKAO_MAPS_URL}
        >
          <Image className={styles.Logo} alt="kakao maps" src={kakaoMapsLogo} />
        </a>
        <a
          className={styles.MapLink}
          target="_blank"
          rel="noreferrer"
          href={NAVER_MAPS_URL}
        >
          <Image className={styles.Logo} alt="naver maps" src={naverMapsLogo} />
        </a>
      </div>
      <p className={styles.Description}>{t("description")}</p>
    </div>
  );
};

export default Events;

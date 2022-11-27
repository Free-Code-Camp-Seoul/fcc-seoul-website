import React from "react";
import Image from "next/image";

import meetupImage from "public/assets/images/fcc-location.jpg";
import kakaoMapsLogo from "public/assets/images/kakao-maps.png";
import naverMapsLogo from "public/assets/images/naver-maps.png";

import styles from "./Events.module.scss";

const NAVER_MAPS_URL = "https://naver.me/xaC9isrW";
const KAKAO_MAPS_URL = "http://kko.to/fkhQtFpFz";

interface EventsProps {}

const Events = ({}: EventsProps) => {
  return (
    <div className={styles.Events}>
      <p className={styles.Times}>Every Sunday from 12pm-5pm</p>
      <Image alt="meetup location" className={styles.Image} src={meetupImage} />
      <p className={styles.Location}>
        4F Lounge - K-Square Gangnam 2 케이스퀘어강남2
      </p>
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
      <p className={styles.Description}>
        At FCC Seoul meetups, you&apos;re welcome to do whatever you&apos;d
        like. Some people self-study, or study with others, ask questions, show
        off projects, talk coding careers, or interview prep. All are welcome!
        No experience is required or expected. Bringing a 💻 laptop is
        encouraged. Feel free to join and leave any time between 12pm-5pm. See
        you soon!
      </p>
    </div>
  );
};

export default Events;

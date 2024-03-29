import { useLottie } from "lottie-react";

import animationData from "../../../public/assets/animations/coding.json";

import GithubIcon from "@/assets/icons/github-icon.svg";

import styles from "./Home.module.scss";

const FCC_LINK = "https://www.freecodecamp.org";
const REPO_LINK =
  "https://github.com/Free-Code-Camp-Seoul/free-code-camp-seoul.github.io";

const ANIMATION_OPTIONS = {
  animationData: animationData,
  loop: true,
  className: styles.AnimationContainer,
};

function Home() {
  const { View } = useLottie(ANIMATION_OPTIONS);

  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}>Hello World 🇰🇷</h1>
      <p className={styles.Subtitle}>
        We are the Seoul Chapter of{" "}
        <a href={FCC_LINK} target="_blank" rel="noreferrer">
          FreeCodeCamp
        </a>
        , a non-profit with chapters all over the world, teaching web
        development for free online.
      </p>
      <a
        className={styles.GithubLink}
        href={REPO_LINK}
        target="_blank"
        rel="noreferrer"
      >
        <GithubIcon className={styles.GithubIcon} />
      </a>
      <>{View}</>
    </div>
  );
}

export default Home;

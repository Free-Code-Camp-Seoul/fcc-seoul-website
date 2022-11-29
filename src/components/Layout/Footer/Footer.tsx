import React from "react";

import styles from "./Footer.module.scss";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <div className={styles.Footer}>
      <p>Made with ❤️ by FCC Seoul</p>
    </div>
  );
};

export default Footer;

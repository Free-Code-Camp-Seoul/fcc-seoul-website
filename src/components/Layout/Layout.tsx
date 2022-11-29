import React from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

import styles from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.Layout}>
      <Navbar />
      <div className={styles.Content}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

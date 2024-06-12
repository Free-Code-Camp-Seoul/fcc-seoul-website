"use client";

//import React from "react";

import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

import { poppins } from "src/const/fonts";

import styles from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className={`${styles.Layout} ${poppins.className}`}>
      <Navbar />
      <div className={styles.Content}>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;

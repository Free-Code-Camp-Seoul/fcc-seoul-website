"use client";

import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";

import { poppins } from "src/const/fonts";

import styles from "./BaseLayout.module.scss";

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

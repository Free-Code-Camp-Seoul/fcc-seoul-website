import React from "react";
import Link from "next/link";

import styles from "./Navbar.module.scss";

const PAGES = [
  { path: "/", label: "Home" },
  {
    path: "/members",
    label: "Members",
  },
  {
    path: "/events",
    label: "Events",
  },
];

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  return (
    <div className={styles.Navbar}>
      {PAGES.map((page) => (
        <Link key={page.path} href={page.path}>
          {page.label}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;

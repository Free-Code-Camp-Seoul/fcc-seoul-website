import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";
import Button from "@/components/Button";

const Navbar = () => {
  const { t } = useTranslation();
  const { locale, pathname, asPath, query, push } = useRouter();

  const handleLocaleChange = () => {
    if (locale === LOCALES.ko.code) {
      push({ pathname, query }, asPath, { locale: LOCALES.en.code });
      return;
    }

    push({ pathname, query }, asPath, { locale: LOCALES.ko.code });
  };

  return (
    <div className={styles.Navbar}>
      {PAGES.map((page) => (
        <Link key={page.path} href={page.path}>
          {t(page.label)}
        </Link>
      ))}

      <Button className={styles.LanguageSwitch} onClick={handleLocaleChange}>
        {locale === LOCALES.en.code ? LOCALES.ko.label : LOCALES.en.label}
      </Button>
    </div>
  );
};

export default Navbar;

const PAGES = [
  { path: "/", label: "home" },
  {
    path: "/members",
    label: "members",
  },
  {
    path: "/events",
    label: "events",
  },
];

const LOCALES = {
  en: {
    code: "en",
    label: "English",
  },
  ko: {
    code: "ko",
    label: "한국어",
  },
} as const;

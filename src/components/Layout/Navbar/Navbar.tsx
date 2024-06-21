import { Link, useRouter, usePathname } from "src/navigation";
import { useTranslations } from "next-intl";
import styles from "./Navbar.module.scss";
import { useParams } from "next/navigation";
import Button from "@/components/Button";

const Navbar = () => {
  const t = useTranslations("navbar");
  const { push } = useRouter();
  const pathname = usePathname();
  const params = useParams<{ locale: string }>();
  const locale = params?.locale;

  const handleLocaleChange = () => {
    if (locale === LOCALES.ko.code) {
      push(`${pathname}/`, { locale: LOCALES.en.code });
      return;
    }

    //push(`${LOCALES.ko.code}/${pathname}/`, { locale: LOCALES.ko.code });
    push(`${pathname}/`, { locale: LOCALES.ko.code });
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

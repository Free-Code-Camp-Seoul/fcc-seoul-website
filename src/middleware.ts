import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./navigation";

export default createMiddleware({
  // Used when no locale matches
  defaultLocale: "en",

  // A list of all locales that are supported
  locales,

  localePrefix,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|ko)/:path*", "/members", "/events"],
};

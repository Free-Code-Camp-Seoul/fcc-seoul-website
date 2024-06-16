import { Metadata } from "next";

export const defaultMetadata: Metadata = {
  metadataBase: new URL("https://fcc-seoul.fly.dev"),
  alternates: {
    canonical: "/",
    languages: {
      en: "en",
      ko: "ko",
    },
  },
  title: {
    default: "FreeCodeCamp Seoul 🇰🇷",
    template: "%s | FreeCodeCamp Seoul 🇰🇷",
  },
  description:
    "FreeCodeCamp Seoul is a community of developers in Seoul, South Korea. We meet regularly to learn and share our knowledge. Join us!",
  applicationName: "FreeCodeCamp Seoul",
  keywords: ["freeCodeCamp", "coding", "meetups", "Seoul", "South Korea"],
  openGraph: {
    type: "website",
    url: "https://fcc-seoul.fly.dev/",
    siteName: "FreeCodeCamp Seoul",
    title: "FreeCodeCamp Seoul 🇰🇷",
    description:
      "FreeCodeCamp Seoul is a community of developers in Seoul, South Korea. We meet regularly to learn and share our knowledge. Join us!",
    images: [
      {
        url: "/assets/images/fcc-logo.webp",
        width: 1000,
        height: 420,
        alt: "FreeCodeCamp Seoul",
      },
    ],
  },
  twitter: {
    creator: "@handle",
    title: "FreeCodeCamp Seoul",
    site: "@site",
    card: "summary_large_image",
    images: ["/assets/images/fcc-logo.webp"],
  },
};

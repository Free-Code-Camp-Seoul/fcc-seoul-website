import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  title: undefined,
  defaultTitle: "FreeCodeCamp Seoul 🇰🇷",
  titleTemplate: "FreeCodeCamp Seoul 🇰🇷 | %s",
  description:
    "FreeCodeCamp Seoul is a community of developers in Seoul, South Korea. We meet regularly to learn and share our knowledge. Join us!",
  canonical: "https://fcc-seoul.fly.dev",
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
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

export default config;

import { Inter, Inter_Tight } from "next/font/google";

export const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
  variable: "--font-inter-tight",
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
  variable: "--font-inter",
});

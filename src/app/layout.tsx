import { ReactNode } from "react";
import "./globals.scss";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return children;
}

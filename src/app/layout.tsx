import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import ThemeInjector from "./_infra-components/theme/ThemeInjector";
import Header from "./_ui-components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Griffon",
  description: "A simple array visuaizer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeInjector />
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

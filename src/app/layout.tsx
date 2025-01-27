import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "John Chimbani",
  description: "John Chimbani's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "bg-background text-foreground font-inter")}>{children}
        <FireFliesBackground />
        <Sound/>
        <div id="my-modal"/>
      </body>
    </html>
  );
}

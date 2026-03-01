import type { Metadata } from "next";
import { Baloo_Bhaijaan_2, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Mainlayout from "./layouts/mainlayout";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--Plus_Jakarta_Sans",
  subsets: ["latin"],
});

const balooBhaijaan2 = Baloo_Bhaijaan_2({
  variable: "--Baloo_Bhaijaan_2",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Mohamed liberta website",
  description: "a photographter based in algeria chelghoom laid (mila)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${balooBhaijaan2.variable} antialiased grid-bg`}
      >
        <Mainlayout>
        {children}
        </Mainlayout>
      </body>
    </html>
  );
}


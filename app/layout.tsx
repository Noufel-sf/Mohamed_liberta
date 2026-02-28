import type { Metadata } from "next";
import { Geist, Geist_Mono , Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--Plus_Jakarta_Sans",
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
        className={`${plusJakartaSans.variable} antialiased grid-bg`}
      >
        {children}
      </body>
    </html>
  );
}


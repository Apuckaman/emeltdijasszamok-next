import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://emeltdijasszamok.info"),
  title: {
    default: "Emelt díjas számok",
    template: "%s | Emelt díjas számok",
  },
  description:
    "Emelt díjas telefonszámok (Audiotex, Audiofix) igénylése vállalkozásoknak. Átlátható feltételek, gyors bekapcsolás, támogatás a teljes folyamatban.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Emelt díjas számok",
    locale: "hu_HU",
    title: "Emelt díjas számok",
    description:
      "Emelt díjas telefonszámok (Audiotex, Audiofix) igénylése vállalkozásoknak. Átlátható feltételek, gyors bekapcsolás.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh bg-white text-zinc-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

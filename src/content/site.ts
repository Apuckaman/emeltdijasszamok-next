export const site = {
  name: "Emelt díjas számok",
  shortName: "Emelt díjas számok",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://emeltdijasszamok.info",
  locale: "hu_HU",
  social: {
    facebook: "https://www.facebook.com/emeltdijasszamok/?ref=bookmarks",
  },
  nav: [
    { href: "/igenyles/", label: "Igénylés" },
    { href: "/audiotex/", label: "Audiotex" },
    { href: "/audiofix/", label: "Audiofix" },
    { href: "/gyik/", label: "GYIK" },
    { href: "/kapcsolat/", label: "Kapcsolat" },
  ],
  footerLinks: [
    { href: "/aszf/", label: "ÁSZF" },
    { href: "/adatvedelem/", label: "Adatvédelem" },
    { href: "/hirdetesi-szabalyok/", label: "Hirdetési szabályok" },
    { href: "/etikai-kodex/", label: "Etikai kódex" },
    { href: "/letolthetok/", label: "Letölthetők" },
  ],
} as const;


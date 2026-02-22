import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://emeltdijasszamok.info";
  const now = new Date();

  const routes = [
    "",
    "/igenyles",
    "/audiotex",
    "/audiofix",
    "/kapcsolat",
    "/gyik",
    "/aszf",
    "/adatvedelem",
    "/hirdetesi-szabalyok",
    "/etikai-kodex",
    "/letolthetok",
  ];

  return routes.map((path) => ({
    url: `${siteUrl}${path}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}


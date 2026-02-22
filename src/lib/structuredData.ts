export type WithContext<T extends string> = {
  "@context": "https://schema.org";
  "@type": T;
  [key: string]: unknown;
};

export function organizationJsonLd(opts?: {
  name?: string;
  url?: string;
  logoUrl?: string;
  sameAs?: string[];
}): WithContext<"Organization"> {
  const url = opts?.url ?? process.env.NEXT_PUBLIC_SITE_URL ?? "https://emeltdijasszamok.info";

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: opts?.name ?? "Emelt díjas számok",
    url,
    ...(opts?.logoUrl ? { logo: opts.logoUrl } : {}),
    ...(opts?.sameAs?.length ? { sameAs: opts.sameAs } : {}),
  };
}

export function websiteJsonLd(opts?: {
  name?: string;
  url?: string;
}): WithContext<"WebSite"> {
  const url = opts?.url ?? process.env.NEXT_PUBLIC_SITE_URL ?? "https://emeltdijasszamok.info";

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: opts?.name ?? "Emelt díjas számok",
    url,
  };
}

export function faqPageJsonLd(
  faqs: Array<{ question: string; answer: string }>
): WithContext<"FAQPage"> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}


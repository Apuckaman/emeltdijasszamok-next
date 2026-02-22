import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { faqPageJsonLd } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "GYIK",
  description: "Gyakran ismételt kérdések emelt díjas számokról, igénylésről és működésről.",
  alternates: { canonical: "/gyik/" },
};

const faqs = [
  {
    question: "Mi az emelt díjas telefonszám?",
    answer:
      "Az emelt díjas telefonszám felhívásakor a hívó fél a szokásos tarifánál magasabb díjat fizet a szolgáltatásért.",
  },
  {
    question: "Mi a különbség az Audiotex és az Audiofix között?",
    answer:
      "Audiotex esetén az elszámolás percdíj alapon történik, Audiofix esetén hívásesemény alapon (több tarifasávval).",
  },
];

export default function GyikPage() {
  return (
    <SiteShell title="GYIK">
      <JsonLd data={faqPageJsonLd(faqs)} />

      <div className="space-y-4">
        {faqs.map((f) => (
          <details key={f.question} className="rounded-2xl border border-zinc-200 p-5">
            <summary className="cursor-pointer text-base font-semibold text-zinc-900">
              {f.question}
            </summary>
            <p className="mt-3 text-sm leading-6 text-zinc-700">{f.answer}</p>
          </details>
        ))}
      </div>
    </SiteShell>
  );
}


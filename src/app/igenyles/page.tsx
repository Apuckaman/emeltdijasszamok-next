import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Igénylés",
  description:
    "Emelt díjas szám igénylésének feltételei és folyamata. Tudnivalók vállalkozásoknak, szükséges dokumentumok és lépések.",
  alternates: { canonical: "/igenyles/" },
};

export default function IgenylesPage() {
  return (
    <SiteShell title="Igénylés">
      <div className="max-w-none space-y-4 text-sm leading-7 text-zinc-700">
        <p>
          Itt fogjuk összerakni az igénylés részletes leírását (feltételek, szükséges dokumentumok,
          bekapcsolás menete). A mostani cél, hogy a URL-ek és a SEO alapok már stabilak legyenek.
        </p>
      </div>
    </SiteShell>
  );
}


import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Letölthetők",
  description: "Letölthető dokumentumok és anyagok.",
  alternates: { canonical: "/letolthetok/" },
};

export default function LetolthetokPage() {
  return (
    <SiteShell title="Letölthetők">
      <div className="space-y-4 text-sm leading-7 text-zinc-700">
        <p>Ide kerülnek a letölthető anyagok (pl. PDF-ek, űrlapok).</p>
      </div>
    </SiteShell>
  );
}


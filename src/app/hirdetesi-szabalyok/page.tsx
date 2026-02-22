import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Hirdetési szabályok",
  description: "Hirdetési szabályok és irányelvek.",
  alternates: { canonical: "/hirdetesi-szabalyok/" },
};

export default function HirdetesiSzabalyokPage() {
  return (
    <SiteShell title="Hirdetési szabályok">
      <div className="space-y-4 text-sm leading-7 text-zinc-700">
        <p>Ide kerülnek a hirdetési szabályok.</p>
      </div>
    </SiteShell>
  );
}


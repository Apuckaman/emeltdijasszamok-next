import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Audiofix",
  description:
    "Audiofix emelt díjas szám: hívásesemény alapú elszámolás, tarifasávok, működés és igénylés.",
  alternates: { canonical: "/audiofix/" },
};

export default function AudiofixPage() {
  return (
    <SiteShell title="Audiofix">
      <div className="max-w-none space-y-4 text-sm leading-7 text-zinc-700">
        <p>
          Audiofix esetén a szolgáltatás elszámolása hívásesemény alapon történik, több tarifasávban.
          Ide jönnek a részletek, példák és az összehasonlítás az Audiotex-szel.
        </p>
      </div>
    </SiteShell>
  );
}


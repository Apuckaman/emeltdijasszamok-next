import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Audiotex",
  description:
    "Audiotex emelt díjas szám: percdíj alapú elszámolás, működés, tudnivalók és igénylés.",
  alternates: { canonical: "/audiotex/" },
};

export default function AudiotexPage() {
  return (
    <SiteShell title="Audiotex">
      <div className="max-w-none space-y-4 text-sm leading-7 text-zinc-700">
        <p>
          Az Audiotex esetén az elszámolás alapja a hívás időben mért hossza (másodperc pontosságú
          számlázás). Ide jönnek a részletes tarifasávok, példák és a gyakori kérdések.
        </p>
      </div>
    </SiteShell>
  );
}


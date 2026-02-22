import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Adatvédelem",
  description: "Adatkezelési tájékoztató és adatvédelmi információk.",
  alternates: { canonical: "/adatvedelem/" },
};

export default function AdatvedelemPage() {
  return (
    <SiteShell title="Adatvédelem">
      <div className="max-w-none space-y-4 text-sm leading-7 text-zinc-700">
        <p>
          Ide kerül az adatvédelmi tájékoztató. A végleges tartalomnál figyelünk arra is, hogy a
          kontakt űrlap / tracking megfeleljen.
        </p>
      </div>
    </SiteShell>
  );
}


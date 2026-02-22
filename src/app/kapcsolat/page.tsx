import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Kapcsolat",
  description: "Kapcsolatfelvétel, visszahívás kérés, elérhetőségek.",
  alternates: { canonical: "/kapcsolat/" },
};

export default function KapcsolatPage() {
  return (
    <SiteShell title="Kapcsolat">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="prose prose-zinc max-w-none">
          <p>
            Itt érdemes egy rövid, bizalomépítő szöveg + a kapcsolatfelvételi űrlap / elérhetőségek
            blokk. Ha megadod a pontos e-mailt/telefonszámot, berakom “éles” tartalommal.
          </p>
          <p>
            Addig is, ha szeretnéd, a <Link href="/igenyles">feltételeket</Link> is át tudod nézni.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-lg font-semibold tracking-tight text-zinc-900">Visszahívást kérek</h2>
          <p className="mt-2 text-sm text-zinc-600">
            A tényleges űrlapot a következő körben rakjuk be (pl. e-mail küldés / CRM integráció).
          </p>
          <div className="mt-6 grid gap-3">
            <input
              className="h-11 rounded-md border border-zinc-300 px-3 text-sm"
              placeholder="Név"
              disabled
            />
            <input
              className="h-11 rounded-md border border-zinc-300 px-3 text-sm"
              placeholder="Telefonszám"
              disabled
            />
            <button
              className="h-11 rounded-md bg-zinc-900 text-sm font-medium text-white opacity-60"
              disabled
            >
              Küldés
            </button>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}


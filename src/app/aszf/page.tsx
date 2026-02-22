import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "ÁSZF",
  description: "Általános szerződési feltételek.",
  alternates: { canonical: "/aszf/" },
};

export default function AszfPage() {
  return (
    <SiteShell title="ÁSZF">
      <div className="max-w-none space-y-4 text-sm leading-7 text-zinc-700">
        <p>
          Ide kerül az ÁSZF tartalma. Ha a régi oldalról áthozzuk, akkor ugyanazzal a URL-lel és
          megfelelő meta adatokkal fog futni.
        </p>
      </div>
    </SiteShell>
  );
}


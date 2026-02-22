import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Etikai kódex",
  description: "Etikai kódex és alapelvek.",
  alternates: { canonical: "/etikai-kodex/" },
};

export default function EtikaiKodexPage() {
  return (
    <SiteShell title="Etikai kódex">
      <div className="space-y-4 text-sm leading-7 text-zinc-700">
        <p>Ide kerül az etikai kódex tartalma.</p>
      </div>
    </SiteShell>
  );
}


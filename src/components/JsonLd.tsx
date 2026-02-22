import type { WithContext } from "@/lib/structuredData";

export function JsonLd({ data }: { data: WithContext<string> | WithContext<string>[] }) {
  const payload = Array.isArray(data) ? data : [data];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}


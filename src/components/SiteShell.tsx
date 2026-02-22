import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function SiteShell({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
        <Container className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg">
              <Image
                src="/Ween_alap_logo-150x150.png"
                alt={site.shortName}
                fill
                className="object-contain transition-transform group-hover:scale-110"
              />
            </div>
            <span className="text-lg font-bold tracking-tight text-zinc-900">
              {site.shortName}
            </span>
          </Link>
          <nav className="hidden gap-8 text-sm font-medium text-zinc-600 md:flex">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-zinc-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button could go here */}
            <button className="p-2 text-zinc-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </Container>
      </header>

      <main className="flex-grow bg-white">
        <Container className="py-10">
          {title ? (
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
              {title}
            </h1>
          ) : null}
          <div className={title ? "mt-10" : ""}>{children}</div>
        </Container>
      </main>

      <footer className="border-t border-zinc-200 bg-zinc-50">
        <Container className="py-12 text-sm text-zinc-600">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/Ween_alap_logo-150x150.png"
                  alt={site.shortName}
                  width={32}
                  height={32}
                />
                <span className="font-bold text-zinc-900">{site.shortName}</span>
              </div>
              <p className="leading-relaxed">
                Emelt díjas telefonszámok igénylése és üzemeltetése több mint 11 éves
                tapasztalattal.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-zinc-900">Navigáció</h4>
              <ul className="mt-4 space-y-2">
                {site.nav.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-zinc-900 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-zinc-900">Információ</h4>
              <ul className="mt-4 space-y-2">
                {site.footerLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-zinc-900 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-zinc-900">Kövess minket</h4>
              <div className="mt-4 flex gap-4">
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-blue-600 transition-colors"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-zinc-200 pt-8 text-center">
            <p>© {new Date().getFullYear()} {site.shortName}. Minden jog fenntartva.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}


import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Counter, FadeIn } from "@/components/ui/Animations";
import { homeContent } from "@/content/home";
import { site } from "@/content/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structuredData";

export default function Home() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          organizationJsonLd({
            sameAs: [site.social.facebook],
          }),
          websiteJsonLd(),
        ]}
      />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white pb-16 pt-8 sm:pb-24 sm:pt-12">
          <Container className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn direction="right">
              <div className="space-y-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl">
                  {homeContent.hero.title}
                </h1>
                <p className="text-lg leading-8 text-zinc-600">
                  {homeContent.hero.subtitle}
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <ButtonLink
                    href={homeContent.hero.primaryCta.href}
                    variant="primary"
                    className="h-14 px-8 text-base shadow-lg shadow-zinc-200"
                  >
                    {homeContent.hero.primaryCta.label}
                  </ButtonLink>
                  <ButtonLink
                    href={homeContent.hero.secondaryCta.href}
                    variant="secondary"
                    className="h-14 px-8 text-base"
                  >
                    {homeContent.hero.secondaryCta.label}
                  </ButtonLink>
                </div>

                <dl className="grid grid-cols-2 gap-8 border-t border-zinc-100 pt-8">
                  {homeContent.hero.stats.map((s) => (
                    <div key={s.label} className="flex flex-col gap-1">
                      <dt className="text-sm font-medium text-zinc-500">{s.label}</dt>
                      <dd className="text-3xl font-bold tracking-tight text-zinc-900">
                        {s.value.includes("+") ? (
                          <>
                            <Counter value={parseInt(s.value)} />+
                          </>
                        ) : s.value.match(/^\d+$/) ? (
                          <Counter value={parseInt(s.value)} />
                        ) : (
                          s.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/Home-hiro.png"
                  alt="Emelt díjas számok illusztráció"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* Why Us Section */}
        <section className="bg-zinc-50 py-24 sm:py-32">
          <Container>
            <FadeIn>
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                  {homeContent.whyUs.title}
                </h2>
              </div>
            </FadeIn>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {homeContent.whyUs.items.map((it, idx) => (
                <FadeIn key={it.title} delay={idx * 0.1}>
                  <div className="flex h-full flex-col rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                    <h3 className="text-xl font-bold text-zinc-900">{it.title}</h3>
                    <p className="mt-4 flex-grow text-sm leading-7 text-zinc-600">
                      {it.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* About Section */}
        <section className="bg-white py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <FadeIn direction="right">
                <div className="relative aspect-square w-full overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src="/egyezseg.png"
                    alt="Megállapodás és bizalom"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
              <FadeIn direction="left">
                <div className="space-y-6">
                  <p className="text-sm font-bold uppercase tracking-widest text-zinc-400">
                    {homeContent.about.kicker}
                  </p>
                  <div className="space-y-6 text-lg leading-8 text-zinc-600">
                    {homeContent.about.body.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* Requirements Section */}
        <section className="bg-zinc-900 py-24 text-white sm:py-32">
          <Container>
            <FadeIn>
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {homeContent.requirements.title}
                </h2>
                <p className="mt-6 text-lg leading-8 text-zinc-400">
                  {homeContent.requirements.intro}
                </p>
              </div>
            </FadeIn>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {homeContent.requirements.items.map((it, idx) => (
                <FadeIn key={it.title} delay={idx * 0.1}>
                  <div className="rounded-3xl border border-zinc-800 bg-zinc-800/50 p-8">
                    <h3 className="text-xl font-bold">{it.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-zinc-400">{it.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn className="mt-12">
              <ButtonLink
                href={homeContent.requirements.cta.href}
                variant="secondary"
                className="border-zinc-700 bg-transparent text-white hover:bg-zinc-800"
              >
                {homeContent.requirements.cta.label}
              </ButtonLink>
            </FadeIn>
          </Container>
        </section>

        {/* Types Section */}
        <section className="bg-white py-24 sm:py-32">
          <Container>
            <FadeIn>
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                  {homeContent.types.title}
                </h2>
              </div>
            </FadeIn>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {homeContent.types.items.map((it, idx) => (
                <FadeIn key={it.href} delay={idx * 0.1} direction={idx === 0 ? "right" : "left"}>
                  <Link
                    href={it.href}
                    className="group relative flex flex-col rounded-3xl border border-zinc-200 bg-white p-10 transition-all hover:border-zinc-300 hover:shadow-xl"
                  >
                    <div className="text-sm font-bold uppercase tracking-widest text-zinc-400">
                      {it.tag}
                    </div>
                    <h3 className="mt-4 text-2xl font-bold text-zinc-900">{it.title}</h3>
                    <p className="mt-4 text-base leading-7 text-zinc-600">{it.body}</p>
                    <div className="mt-8 flex items-center font-bold text-zinc-900 group-hover:translate-x-2 transition-transform">
                      {it.cta} <span className="ml-2">→</span>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Steps Section */}
        <section className="bg-zinc-50 py-24 sm:py-32">
          <Container>
            <FadeIn>
              <div className="text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-zinc-400">
                  {homeContent.steps.kicker}
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                  {homeContent.steps.title}
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
                  {homeContent.steps.intro}
                </p>
              </div>
            </FadeIn>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {homeContent.steps.items.map((it, idx) => (
                <FadeIn key={it.step} delay={idx * 0.1}>
                  <div className="relative h-full rounded-3xl border border-zinc-200 bg-white p-8">
                    <div className="absolute -top-4 left-8 flex h-8 w-12 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white">
                      {it.step}
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-zinc-900">{it.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-zinc-600">{it.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="bg-white py-24">
          <Container>
            <FadeIn>
              <div className="relative overflow-hidden rounded-3xl bg-zinc-900 px-8 py-16 text-center text-white sm:px-16 sm:py-24">
                <div className="relative z-10 mx-auto max-w-2xl">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    {homeContent.finalCta.title}
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-zinc-400">
                    {homeContent.finalCta.body}
                  </p>
                  <div className="mt-10 flex justify-center">
                    <ButtonLink
                      href={homeContent.finalCta.cta.href}
                      variant="primary"
                      className="bg-white text-zinc-900 hover:bg-zinc-100 h-14 px-10 text-base"
                    >
                      {homeContent.finalCta.cta.label}
                    </ButtonLink>
                  </div>
                </div>
                {/* Background decorative element */}
                <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-zinc-800 opacity-20 blur-3xl" />
                <div className="absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-zinc-800 opacity-20 blur-3xl" />
              </div>
            </FadeIn>
          </Container>
        </section>
      </main>
    </SiteShell>
  );
}

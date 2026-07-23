import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { holdings, principles, registerRows, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,168,75,0.12),_transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">{site.name}</p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-200">{site.description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#holdings"
              className="rounded-md bg-gold-500 px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-gold-400"
            >
              Our Holdings
            </Link>
            <Link
              href="#contact"
              className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 bg-white px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">About Velasum</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
            A Zambian group with an operating record
          </h2>
          <div className="mt-8 max-w-3xl space-y-4 text-ink-700 leading-relaxed">
            <p>
              Velasum Ventures Limited is a Zambian investment holding company, incorporated in Lusaka in July 2026. We
              build and hold operating businesses across sectors where precision and long-term commitment matter —
              logistics and fleet technology, laboratory quality assurance, and precision measurement.
            </p>
            <p>
              We are founders and operators, not passive investors. Each business in our portfolio is actively managed,
              developed in partnership with domain experts, and built toward the international standards demanded by the
              markets it serves.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {principles.map((item) => (
              <article key={item.title} className="rounded-xl border border-ink-100 bg-ink-50 p-6">
                <h3 className="font-display text-xl font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="holdings" className="scroll-mt-20 bg-ink-50 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">Our Holdings</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">Operating companies</h2>
          <div className="mt-12 space-y-6">
            {holdings.map((company) => (
              <article
                key={company.name}
                className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm sm:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">{company.sector}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-ink-900">{company.name}</h3>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-700 sm:text-base">{company.body}</p>
                <p className="mt-4 text-sm font-medium text-ink-500">{company.meta}</p>
                {company.href && company.linkLabel && (
                  <a
                    href={company.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-semibold text-ink-900 underline decoration-gold-500 underline-offset-4 hover:text-gold-600"
                  >
                    {company.linkLabel}
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="scroll-mt-20 bg-white px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">Leadership</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">The people responsible</h2>
          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[280px_1fr]">
            <div className="overflow-hidden rounded-2xl border border-ink-100 bg-ink-100">
              <Image
                src={site.founderImage}
                alt="Vernon Moonga Musale"
                width={560}
                height={700}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gold-600">
                Founder &amp; Managing Director
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-ink-900">Vernon Moonga Musale</h3>
              <p className="mt-6 text-ink-700 leading-relaxed">
                Vernon Musale is the Founder and Managing Director of Velasum Ventures Limited, a Zambian investment
                holding company focused on building and growing high-impact businesses across healthcare, logistics,
                industrial services, and technology. With over a decade of experience in laboratory management, quality
                systems, and business leadership, he brings a unique combination of scientific expertise, operational
                excellence, and entrepreneurial vision to the group. Under his leadership, Velasum Ventures seeks to
                create sustainable enterprises that generate long-term value while contributing to Africa&apos;s economic
                transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="register" className="scroll-mt-20 bg-ink-950 px-4 py-20 text-white sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-400">Corporate Information</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Company register</h2>
          <dl className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
            {registerRows.map((row) => (
              <div key={row.label} className="grid gap-2 px-5 py-4 sm:grid-cols-[240px_1fr] sm:gap-6">
                <dt className="text-sm font-medium text-ink-200">{row.label}</dt>
                <dd className="text-sm text-white sm:text-base">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 bg-white px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">Contact</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">Let&apos;s talk</h2>
            <p className="mt-4 max-w-md text-ink-700 leading-relaxed">
              Whether you are considering a partnership, evaluating our portfolio, or have a question about our holdings,
              we welcome direct enquiries.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <div>
                <p className="font-semibold text-ink-900">Email</p>
                <a href={`mailto:${site.email}`} className="text-ink-700 underline hover:text-gold-600">
                  {site.email}
                </a>
              </div>
              <div>
                <p className="font-semibold text-ink-900">Location</p>
                <p className="text-ink-700">{site.location}</p>
              </div>
              <div>
                <p className="font-semibold text-ink-900">Registered office</p>
                <p className="text-ink-700">{site.registeredOffice}</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-ink-100 bg-ink-50 p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

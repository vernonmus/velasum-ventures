import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: `How ${site.name} collects and uses personal information through this website.`,
};

export default function PrivacyNoticePage() {
  return (
    <div className="bg-white px-4 py-16 sm:px-6">
      <article className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">Legal</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink-900">Privacy Notice</h1>
        <p className="mt-4 text-sm text-ink-500">Last updated: July 2026</p>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold text-ink-900">Who we are</h2>
          <p className="text-sm leading-relaxed text-ink-700">
            {site.name} is a private company incorporated in Zambia (Company No. {site.companyNumber}), with its
            registered office at {site.registeredOffice}.
          </p>
          <p className="text-sm leading-relaxed text-ink-700">
            We are the controller of the personal information collected through this website. You can contact us at{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-ink-900 underline">
              {site.email}
            </a>
            .
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold text-ink-900">What we collect</h2>
          <p className="text-sm leading-relaxed text-ink-700">
            When you submit the contact form on this website, we collect:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-ink-700">
            <li>Your full name</li>
            <li>Your email address</li>
            <li>Your organisation name (where provided)</li>
            <li>The content of your message</li>
          </ul>
          <p className="text-sm leading-relaxed text-ink-700">
            We do not collect any other personal information through this website.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold text-ink-900">How we use it</h2>
          <p className="text-sm leading-relaxed text-ink-700">
            We use this information solely to respond to your enquiry. We do not use it for marketing purposes, and we do
            not sell or share it with third parties except where required by applicable law.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold text-ink-900">How long we keep it</h2>
          <p className="text-sm leading-relaxed text-ink-700">
            Enquiry records are retained for up to two years from the date of submission, after which they are securely
            deleted — unless an ongoing correspondence or legal obligation requires otherwise.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold text-ink-900">Your rights</h2>
          <p className="text-sm leading-relaxed text-ink-700">You have the right to:</p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-ink-700">
            <li>Request access to the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Withdraw consent at any time where processing is based on consent</li>
          </ul>
          <p className="text-sm leading-relaxed text-ink-700">
            To exercise any of these rights, please contact us at{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-ink-900 underline">
              {site.email}
            </a>
            . We will respond within 30 days.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold text-ink-900">Cookies and tracking</h2>
          <p className="text-sm leading-relaxed text-ink-700">
            This website does not use analytics cookies or tracking technologies. No cookies are set beyond what is
            necessary for the site to function.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold text-ink-900">Changes to this notice</h2>
          <p className="text-sm leading-relaxed text-ink-700">
            We may update this Privacy Notice from time to time. The date at the top of this page indicates when it was
            last revised. Continued use of this website after any changes constitutes acceptance of the updated notice.
          </p>
        </section>

        <p className="mt-12">
          <Link href="/" className="text-sm font-semibold text-ink-900 underline hover:text-gold-600">
            ← Back to Velasum Ventures
          </Link>
        </p>
      </article>
    </div>
  );
}

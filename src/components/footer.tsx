import Link from "next/link";
import { holdings, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-950 text-ink-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold text-white">
            {site.shortName}
            <span className="block text-base font-normal text-ink-200">Limited</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            A Zambian investment holding company. Building businesses where standards matter.
          </p>
          <p className="mt-4 text-sm">{site.location}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-gold-400">Holdings</p>
          <ul className="mt-3 space-y-2 text-sm">
            {holdings.map((h) => (
              <li key={h.name}>
                {h.href ? (
                  <a href={h.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    {h.name}
                  </a>
                ) : (
                  <span>{h.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-gold-400">Company</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/#about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/#register" className="hover:text-white">
                Company register
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy-notice" className="hover:text-white">
                Privacy Notice
              </Link>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-800 px-4 py-6 text-center text-xs text-ink-500 sm:px-6">
        <p>
          © {new Date().getFullYear()} {site.name} · Registered in Zambia · Company No. {site.companyNumber}
        </p>
        <p className="mx-auto mt-3 max-w-3xl leading-relaxed">
          Nothing on this website constitutes an offer or invitation to invest, subscribe for, or otherwise acquire
          securities or interests in Velasum Ventures Limited or any of its subsidiaries or associated companies.
          Velasum Ventures Limited is a private company incorporated in Zambia.
        </p>
      </div>
    </footer>
  );
}

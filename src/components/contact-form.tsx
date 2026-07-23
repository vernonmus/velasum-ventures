"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Static-friendly form endpoint — delivers to company email (no server required)
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.get("fullName"),
          email: data.get("email"),
          organisation: data.get("organisation") || "—",
          message: data.get("message"),
          _subject: "Velasum Ventures website enquiry",
        }),
      });

      if (!res.ok) {
        throw new Error("send failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setError(`Unable to send your enquiry. Please email us directly at ${site.email}.`);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-900">
        <p className="font-semibold">Thank you — your enquiry has been received.</p>
        <p className="mt-2 text-sm">We will respond as soon as we can.</p>
        <button type="button" className="mt-4 text-sm font-semibold underline" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-ink-700">
          Full Name *
        </label>
        <input
          id="fullName"
          name="fullName"
          required
          className="w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink-700">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
        />
      </div>
      <div>
        <label htmlFor="organisation" className="mb-1 block text-sm font-medium text-ink-700">
          Organisation
        </label>
        <input
          id="organisation"
          name="organisation"
          className="w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-ink-700">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
        />
      </div>
      {status === "error" && <p className="text-sm text-rose-600">{error}</p>}
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-lg bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-800 disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send Enquiry"}
      </button>
      <p className="text-xs text-ink-500">
        Your information is used only to respond to your enquiry.{" "}
        <Link href="/privacy-notice/" className="underline hover:text-ink-800">
          Privacy Notice
        </Link>
        .
      </p>
    </form>
  );
}

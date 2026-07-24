"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "activation" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("fullName") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      organisation: String(data.get("organisation") ?? "").trim() || "—",
      message: String(data.get("message") ?? "").trim(),
      _subject: "Velasum Ventures website enquiry",
      _template: "table",
      _captcha: "false",
      _honey: "",
    };

    try {
      // FormSubmit delivers to site.email. First use sends an activation email TO that inbox (not shown on this page).
      const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const body = (await res.json().catch(() => ({}))) as {
        success?: string | boolean;
        message?: string;
        error?: string;
      };

      const text = `${body.success ?? ""} ${body.message ?? ""} ${body.error ?? ""}`.toLowerCase();

      if (
        text.includes("activat") ||
        text.includes("confirm") ||
        text.includes("check your email") ||
        text.includes("verify")
      ) {
        setStatus("activation");
        form.reset();
        return;
      }

      if (!res.ok || body.error) {
        throw new Error(body.error || body.message || "send failed");
      }

      // FormSubmit often returns success even while awaiting activation — remind user to check the company inbox once.
      setStatus("success");
      form.reset();
    } catch {
      setError(
        `Unable to send via the form right now. Please email ${site.email} directly (or try again in a few minutes).`
      );
      setStatus("error");
    }
  }

  if (status === "activation") {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-amber-950">
        <p className="font-semibold">Almost there — confirm the form once</p>
        <p className="mt-2 text-sm leading-relaxed">
          FormSubmit has emailed <strong>{site.email}</strong> with an activation link (not shown on this website).
          Open that mailbox, check spam/junk, and click <strong>Activate Form</strong> / confirm. Then submit this form
          again — messages will start arriving there.
        </p>
        <button type="button" className="mt-4 text-sm font-semibold underline" onClick={() => setStatus("idle")}>
          Back to form
        </button>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-900">
        <p className="font-semibold">Thank you — your enquiry has been submitted.</p>
        <p className="mt-2 text-sm leading-relaxed">
          If this is the first time the form has been used, FormSubmit may first send an activation email to{" "}
          <strong>{site.email}</strong> (check spam). After you click that link, enquiries are delivered to that address.
        </p>
        <p className="mt-2 text-sm">
          You can also write to us at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline">
            {site.email}
          </a>
          .
        </p>
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
      {/* Honeypot for FormSubmit */}
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {status === "error" && <p className="text-sm text-rose-600">{error}</p>}
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-lg bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-800 disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send Enquiry"}
      </button>
      <p className="text-xs text-ink-500">
        Enquiries are delivered to{" "}
        <a href={`mailto:${site.email}`} className="underline hover:text-ink-800">
          {site.email}
        </a>
        . Your information is used only to respond.{" "}
        <Link href="/privacy-notice/" className="underline hover:text-ink-800">
          Privacy Notice
        </Link>
        .
      </p>
    </form>
  );
}

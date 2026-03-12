"use client";

import { useRef, useState, useEffect, useCallback, type SyntheticEvent } from "react";
import Script from "next/script";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    turnstile?: {
      render: (element: HTMLElement, options: Record<string, unknown>) => void;
      reset: (widgetId?: string) => void;
    };
  }
}

const CONTACT_API = "https://uh016457ti.execute-api.us-east-1.amazonaws.com/contact";
const TURNSTILE_SITE_KEY = "0x4AAAAAACoBZt99Fb4iUWS7";

const inputClass = "flex-1 bg-transparent border-b border-onedark-gutter/40 focus:border-onedark-red focus:outline-none text-white text-sm py-1 transition-colors";

export default function Contact() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef<HTMLDivElement>(null);

  const renderTurnstile = useCallback(() => {
    if (turnstileRef.current && window.turnstile) {
      turnstileRef.current.innerHTML = "";
      window.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        theme: "dark",
        appearance: "interaction-only",
        callback: (token: string) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(""),
      });
    }
  }, []);

  useEffect(() => {
    if (window.turnstile && turnstileRef.current) {
      renderTurnstile();
    }
  }, [renderTurnstile]);

  const handleFormSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    if (!turnstileToken) {
      setError("Please complete the verification.");
      setSubmitting(false);
      return;
    }

    const formData = new FormData(event.currentTarget);

    try {
      const res = await fetch(CONTACT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          "phone-number": formData.get("phone-number"),
          message: formData.get("message"),
          "cf-turnstile-response": turnstileToken,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      router.push("/success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      <Header barColor="red" />

      <div className="max-w-md w-full mx-auto px-6 pb-16">
        <div className="mt-12">
          <span className="text-onedark-gutter">daniel@barcelona:~$</span>{" "}
          <span className="text-onedark-fg">./contact.sh</span>
        </div>

        <form onSubmit={handleFormSubmit} className="relative border border-onedark-gutter/40 mt-8 p-6">
          <span className="absolute -top-[0.6rem] left-4 bg-onedark-bg px-2 text-onedark-gutter text-sm">
            ./contact.sh
          </span>
          <p className="text-onedark-gutter text-sm mb-6">
            # open to new work & collaborations.
          </p>
          <div className="grid grid-cols-[max-content_1fr] gap-x-3 gap-y-5 items-center">
            <label htmlFor="name" className="text-onedark-fg text-sm whitespace-nowrap">
              name<span className="text-onedark-red">*</span> ❯
            </label>
            <input name="name" id="name" type="text" required className={inputClass} />

            <label htmlFor="email" className="text-onedark-fg text-sm whitespace-nowrap">
              email<span className="text-onedark-red">*</span> ❯
            </label>
            <input name="email" id="email" type="email" required className={inputClass} />

            <label htmlFor="phone-number" className="text-onedark-fg text-sm whitespace-nowrap">
              phone ❯
            </label>
            <input name="phone-number" id="phone-number" type="tel" className={inputClass} />

            <label htmlFor="message" className="text-onedark-fg text-sm whitespace-nowrap self-start pt-1">
              message<span className="text-onedark-red">*</span> ❯
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={5}
              className="w-full bg-transparent border-b border-onedark-gutter/40 focus:border-onedark-red focus:outline-none text-white text-sm py-1 transition-colors resize-none"
            />
          </div>

          <div ref={turnstileRef} className="mt-6" />

          {error && (
            <p className="text-onedark-red text-sm mt-4">bash: ./contact.sh: {error}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="group text-onedark-red transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm mt-6 block"
          >
            <span className="text-onedark-gutter group-hover:text-onedark-red transition-colors">[</span>
            <span> {submitting ? "sending..." : "send message"} </span>
            <span className="text-onedark-gutter group-hover:text-onedark-red transition-colors">]</span>
          </button>
        </form>
      </div>

      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback"
        strategy="afterInteractive"
        onReady={renderTurnstile}
      />
    </main>
  );
}

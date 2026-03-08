"use client";

import { useState, type SyntheticEvent } from "react";
import HeaderBar from "@/components/HeaderBar";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";

const CONTACT_API = "https://uh016457ti.execute-api.us-east-1.amazonaws.com/contact";

export default function Contact() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleFormSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");

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
      <HeaderBar color="red" />
      <Header />

      <div className="max-w-md w-full mx-auto px-6 pb-16">
        <div className="mt-12 mb-6">
          <span className="text-onedark-gutter">daniel@barcelona:~$</span>{" "}
          <span className="text-onedark-fg">./contact.sh</span>
        </div>
        <form
          className="p-6 rounded-lg border border-onedark-gutter/40"
          onSubmit={handleFormSubmit}
        >
          <h1 className="text-2xl font-bold text-onedark-red mb-5">
            Hello world!
          </h1>

          <label className="block text-sm text-onedark-fg ml-1 mb-3">
            name<span className="text-onedark-red">*</span>
            <input
              placeholder="Your name"
              name="name"
              id="name"
              type="text"
              required
              className="w-full mt-1 p-2.5 bg-onedark-currentline/50 border border-onedark-gutter/40 rounded-md text-sm text-white placeholder:text-onedark-gutter focus:border-onedark-red focus:outline-none transition-colors"
            />
          </label>

          <label className="block text-sm text-onedark-fg ml-1 mb-3">
            email<span className="text-onedark-red">*</span>
            <input
              placeholder="Your email address"
              name="email"
              id="email"
              type="email"
              required
              className="w-full mt-1 p-2.5 bg-onedark-currentline/50 border border-onedark-gutter/40 rounded-md text-sm text-white placeholder:text-onedark-gutter focus:border-onedark-red focus:outline-none transition-colors"
            />
          </label>

          <label className="block text-sm text-onedark-fg ml-1 mb-3">
            phone number
            <input
              placeholder="Your phone number"
              type="tel"
              name="phone-number"
              id="phone-number"
              className="w-full mt-1 p-2.5 bg-onedark-currentline/50 border border-onedark-gutter/40 rounded-md text-sm text-white placeholder:text-onedark-gutter focus:border-onedark-red focus:outline-none transition-colors"
            />
          </label>

          <label className="block text-sm text-onedark-fg ml-1 mb-3">
            message<span className="text-onedark-red">*</span>
            <textarea
              placeholder="Type your message here..."
              name="message"
              id="message"
              required
              rows={4}
              className="w-full mt-1 p-2.5 bg-onedark-currentline/50 border border-onedark-gutter/40 rounded-md text-sm text-white placeholder:text-onedark-gutter focus:border-onedark-red focus:outline-none transition-colors resize-y"
            />
          </label>

          {error && (
            <p className="text-onedark-red text-sm mt-2">{error}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full mt-4 text-onedark-red font-bold p-2.5 rounded-md border border-onedark-red hover:bg-onedark-red/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "sending..." : "submit"}
          </button>
        </form>
      </div>
    </main>
  );
}

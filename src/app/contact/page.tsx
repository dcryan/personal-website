"use client";

import type { SyntheticEvent } from "react";
import HeaderBar from "@/components/HeaderBar";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();

  const handleFormSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const formDataEntries = Array.from(formData.entries()).filter(
      ([, value]) => typeof value === "string",
    ) as [string, string][];

    await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formDataEntries).toString(),
    });

    router.push("/success");
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
          className="p-6 rounded-lg border border-onedark-selection hover:bg-onedark-currentline/30 transition-colors"
          method="post"
          action="/success"
          onSubmit={handleFormSubmit}
          data-netlify="true"
          name="contact"
        >
          <h1 className="text-2xl font-bold text-onedark-red mb-4">
            Hello world!
          </h1>

          <label className="block text-xs text-onedark-gutter ml-1 mb-2">
            name*
            <input
              placeholder="Your name"
              name="name"
              id="name"
              type="text"
              required
              className="w-full mt-1 p-2 bg-transparent border border-onedark-selection rounded-md text-sm text-onedark-fg placeholder:text-onedark-selection focus:border-onedark-red focus:outline-none transition-colors"
            />
          </label>

          <label className="block text-xs text-onedark-gutter ml-1 mb-2">
            email*
            <input
              placeholder="Your email address"
              name="email"
              id="email"
              type="email"
              required
              className="w-full mt-1 p-2 bg-transparent border border-onedark-selection rounded-md text-sm text-onedark-fg placeholder:text-onedark-selection focus:border-onedark-red focus:outline-none transition-colors"
            />
          </label>

          <label className="block text-xs text-onedark-gutter ml-1 mb-2">
            phone number
            <input
              placeholder="Your phone number"
              type="tel"
              name="phone-number"
              id="phone-number"
              className="w-full mt-1 p-2 bg-transparent border border-onedark-selection rounded-md text-sm text-onedark-fg placeholder:text-onedark-selection focus:border-onedark-red focus:outline-none transition-colors"
            />
          </label>

          <label className="block text-xs text-onedark-gutter ml-1 mb-2">
            message*
            <textarea
              placeholder="Type your message here..."
              name="message"
              id="message"
              required
              rows={4}
              className="w-full mt-1 p-2 bg-transparent border border-onedark-selection rounded-md text-sm text-onedark-fg placeholder:text-onedark-selection focus:border-onedark-red focus:outline-none transition-colors resize-y"
            />
          </label>

          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
            className="w-full mt-4 text-onedark-red p-2 rounded-md border border-onedark-red hover:bg-onedark-red/20 transition-colors"
          >
            submit
          </button>
        </form>
      </div>
    </main>
  );
}

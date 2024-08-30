"use client";

import React from "react";
import HeaderBar from "@/components/HeaderBar";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    const formDataEntries = Array.from(formData.entries()).filter(
      ([_, value]) => typeof value === "string",
    ) as [string, string][];

    await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formDataEntries).toString(),
    });

    router.push("/success");
  };

  return (
    <main className="h-screen bg-gray-800">
      <HeaderBar color="red" />
      <Header />

      <div className="max-w-md w-full mx-auto">
        <form
          className="p-6 my-12 rounded-md border border-gray-700"
          method="post"
          action="/success"
          onSubmit={handleFormSubmit}
          data-netlify="true"
          name="contact"
        >
          <h3 className="text-2xl font-bold text-rose-400 mb-4">
            Hello world! 👋
          </h3>

          <label htmlFor="name" className="text-xs text-gray-400 ml-2">
            name*
            <input
              placeholder="Your name"
              name="name"
              type="text"
              required
              className="w-full mt-0.5 mb-1 p-2 bg-transparent box-border border border-gray-700 rounded-md text-sm"
            />
          </label>

          <label htmlFor="email" className="text-xs text-gray-400 ml-2">
            email*
            <input
              placeholder="Your email address"
              name="email"
              type="email"
              required
              className="w-full mt-0.5 mb-1 p-2 bg-transparent box-border border border-gray-700 rounded-md text-sm"
            />
          </label>

          <label htmlFor="phone-number" className="text-xs text-gray-400 ml-2">
            phone number
            <input
              placeholder="Your phone number"
              type="tel"
              name="phone-number"
              className="w-full mt-0.5 mb-1 p-2 bg-transparent box-border border border-gray-700 rounded-md text-sm"
            />
          </label>

          <label htmlFor="message" className="text-xs text-gray-400 ml-2">
            message*
            <textarea
              placeholder="Type your message here..."
              name="message"
              required
              className="w-full mt-0.5 mb-1 p-2 bg-transparent box-border border border-gray-700 rounded-md text-sm"
            />
          </label>

          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
            className="w-full mt-4 text-rose-400 p-2 rounded-md border border-rose-400 hover:underline"
          >
            submit
          </button>
        </form>
      </div>
    </main>
  );
}

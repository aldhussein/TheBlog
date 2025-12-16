"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
      headers: { "Content-Type": "application/json" },
    });

    setLoading(false);
    if (res.ok) {
      setStatus("success");
      e.currentTarget.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <div className="bg-background rounded-2xl shadow-sm p-8 md:p-10">
      <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          name="name"
          required
          placeholder="Your Name"
          className="w-full rounded-xl border px-4 py-3"
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Your Email"
          className="w-full rounded-xl border px-4 py-3"
        />

        <textarea
          name="message"
          required
          rows={5}
          placeholder="Your Message"
          className="w-full rounded-xl border px-4 py-3 resize-none"
        />

        <button
          disabled={loading}
          className="w-full rounded-xl bg-primary py-3 font-semibold text-primary-foreground hover:opacity-90 transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-600">Message sent successfully.</p>
        )}
        {status === "error" && (
          <p className="text-red-600">Something went wrong. Try again.</p>
        )}
      </form>
    </div>
  );
}

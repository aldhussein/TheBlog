"use client";

import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 max-w-5xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Privacy <span className="text-primary">Policy</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          This Privacy Policy explains how NextBlog collects, uses, and protects your information. It is required by Google AdSense and ensures transparency and trust for our users.
        </p>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 pb-20 max-w-4xl space-y-12">
        <div className="bg-background rounded-2xl shadow-sm p-8 md:p-10">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="text-muted-foreground leading-relaxed">
            NextBlog may collect non-personally identifiable information such as IP addresses, browser types, device types, and pages visited. Personal information is collected only when voluntarily provided by users, such as through our contact form.
          </p>
        </div>

        <div className="bg-background rounded-2xl shadow-sm p-8 md:p-10">
          <h2 className="text-2xl font-semibold mb-4">Cookies & Data Collection</h2>
          <p className="text-muted-foreground leading-relaxed">
            We use cookies to improve user experience and analyze site traffic. Google AdSense and other third-party advertising partners may also use cookies or similar technologies to serve personalized ads based on your browsing behavior.
          </p>
        </div>

        <div className="bg-background rounded-2xl shadow-sm p-8 md:p-10">
          <h2 className="text-2xl font-semibold mb-4">Advertising & Tracking Practices</h2>
          <p className="text-muted-foreground leading-relaxed">
            NextBlog participates in Google AdSense programs, which may display ads tailored to your interests. Ads may use cookies, web beacons, and other tracking technologies. We do not sell personal information and only use data for improving content and advertising relevance.
          </p>
        </div>

        <div className="bg-background rounded-2xl shadow-sm p-8 md:p-10">
          <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our website may contain links to external sites. We are not responsible for the privacy practices of these sites and encourage users to review their privacy policies.
          </p>
        </div>

        <div className="bg-background rounded-2xl shadow-sm p-8 md:p-10">
          <h2 className="text-2xl font-semibold mb-4">Your Consent</h2>
          <p className="text-muted-foreground leading-relaxed">
            By using our website, you consent to our Privacy Policy, including the use of cookies and data collection for advertising purposes, and agree to its terms.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-2xl border px-8 py-4 font-semibold hover:bg-muted transition"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Footer Link */}
      <footer className="w-full bg-background border-t py-6 text-center">
        <Link href="/privacy-policy" className="text-primary underline">
          Privacy Policy
        </Link>
      </footer>
    </main>
  );
}

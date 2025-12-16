"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo / Branding */}
        <div className="text-xl font-bold text-primary">
          NextBlog
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-4 text-muted-foreground">
          <Link href="/about" className="hover:text-primary transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-primary transition">
            Contact
          </Link>
          <Link href="/privacy-policy" className="hover:text-primary transition">
            Privacy Policy
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} NextBlog. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

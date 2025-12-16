import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
<main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
{/* Hero Section */}
<section className="container mx-auto px-4 py-20 max-w-5xl">
<div className="text-center">
<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
About <span className="text-primary">NextBlog</span>
</h1>
<p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
A trusted blogging platform focused on delivering original,
informative, and reader-first content for a global audience.
</p>
</div>
</section>


{/* Content Section */}
<section className="container mx-auto px-4 pb-20 max-w-4xl space-y-12">
<div className="bg-background rounded-2xl shadow-sm p-8 md:p-10">
<h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
<p className="text-muted-foreground leading-relaxed">
<strong>NextBlog</strong> is an independent blog designed to share
high-quality articles, guides, and insights across a range of topics.
Our goal is to educate, inform, and empower readers by publishing
content that is accurate, well-researched, and easy to understand.
</p>
</div>


<div className="bg-background rounded-2xl shadow-sm p-8 md:p-10">
<h2 className="text-2xl font-semibold mb-4">What We Publish</h2>
<ul className="list-disc list-inside space-y-2 text-muted-foreground">
<li>Educational and informational blog posts</li>
<li>Step-by-step tutorials and guides</li>
<li>Technology, web development, and digital topics</li>
<li>Opinion pieces based on research and experience</li>
</ul>
</div>


<div className="bg-background rounded-2xl shadow-sm p-8 md:p-10">
<h2 className="text-2xl font-semibold mb-4">Our Editorial Standards</h2>
<p className="text-muted-foreground leading-relaxed">
We follow strict editorial guidelines to ensure all content is
original, ethical, and compliant with copyright laws. We do not
publish misleading, harmful, or plagiarized material. Every article
is written with transparency and integrity.
</p>
</div>


<div className="bg-background rounded-2xl shadow-sm p-8 md:p-10">
<h2 className="text-2xl font-semibold mb-4">Advertising & Monetization</h2>
<p className="text-muted-foreground leading-relaxed">
NextBlog may display advertisements provided by trusted third-party
partners such as Google AdSense. These ads help support the operation
and maintenance of the website while allowing us to keep content
freely accessible to all readers.
</p>
</div>


<div className="bg-background rounded-2xl shadow-sm p-8 md:p-10">
<h2 className="text-2xl font-semibold mb-4">Contact & Transparency</h2>
<p className="text-muted-foreground leading-relaxed">
We value transparency and communication. If you have any questions,
suggestions, or concerns, please visit our{" "}
<Link href="/contact" className="text-primary underline">
Contact Page
</Link>
. We aim to respond in a timely and respectful manner.
</p>
</div>


{/* CTA */}
<div className="text-center pt-8">
<Link
href="/"
className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-primary-foreground font-semibold hover:opacity-90 transition"
>
Explore Our Blog
</Link>
</div>
</section>
</main>
  )
}

export default AboutPage
import ContactForm from '@/components/contactForm'
import Link from 'next/link'
import React from 'react'

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
{/* Header */}
<section className="container mx-auto px-4 py-20 max-w-5xl text-center">
<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
Contact <span className="text-primary">Us</span>
</h1>
<p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
Have questions, feedback, or business inquiries? We’d love to hear from
you. Reach out using the information below.
</p>
</section>


{/* Contact Content */}
<section className="container mx-auto px-4 pb-20 max-w-4xl space-y-12">
{/* Contact Information */}
<div className="bg-background rounded-2xl shadow-sm p-8 md:p-10">
<h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
<p className="text-muted-foreground leading-relaxed mb-4">
We value communication and transparency with our readers. If you have
any questions about our content, advertising, or partnerships, feel
free to contact us.
</p>
<p className="text-muted-foreground leading-relaxed">
📧 Email: <a href="mailto:contact@nextblog.com" className="text-primary underline">contact@nextblog.com</a>
</p>
</div>


{/* AdSense Compliance Section */}
<div className="bg-background rounded-2xl shadow-sm p-8 md:p-10">
<h2 className="text-2xl font-semibold mb-4">Advertising & Policy Questions</h2>
<p className="text-muted-foreground leading-relaxed">
For questions related to advertising, Google AdSense, content usage,
or policy concerns, please contact us via email. We aim to respond
promptly and professionally to all legitimate inquiries.
</p>
</div>

<ContactForm/>

{/* Transparency Section */}
<div className="bg-background rounded-2xl shadow-sm p-8 md:p-10">
<h2 className="text-2xl font-semibold mb-4">Transparency Notice</h2>
<p className="text-muted-foreground leading-relaxed">
NextBlog is committed to transparency and ethical practices. We do not
collect sensitive personal information through this page. Any
communication sent to us is used solely for responding to inquiries
and is handled in accordance with our{" "}
<Link href="/privacy-policy" className="text-primary underline">
Privacy Policy
</Link>.
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
</main>
  )
}

export default ContactPage
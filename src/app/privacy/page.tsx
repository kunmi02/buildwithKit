import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { CONTACT_EMAIL } from "@/lib/constants";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0f1515] text-white">
      <Nav />
      <section className="mx-auto max-w-3xl px-5 py-20">
        <h1 className="mb-6 text-4xl font-black">Privacy Policy</h1>
        <div className="space-y-5 leading-8 text-[#b7c0c0]">
          <p>Faceless Blueprint respects your privacy. This page explains how we collect and use basic information when you visit our website or purchase our digital products.</p>
          <p>We may collect information such as your name, email address, purchase details, and support messages. Payments are processed securely through our checkout or merchant-of-record provider.</p>
          <p>We use your information to deliver purchased products, send receipts, provide support, improve the website, and understand marketing performance.</p>
          <p>We do not sell your personal information. For questions, contact {CONTACT_EMAIL}.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

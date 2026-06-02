import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { CONTACT_EMAIL } from "@/lib/constants";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0f1515] text-white">
      <Nav />
      <section className="mx-auto max-w-3xl px-5 py-20">
        <h1 className="mb-6 text-4xl font-black">Terms of Use</h1>
        <div className="space-y-5 leading-8 text-[#b7c0c0]">
          <p>By using this website or purchasing our digital products, you agree to these terms.</p>
          <p>Our products are digital downloads created for educational and informational purposes. We do not guarantee specific YouTube, business, income, or growth results.</p>
          <p>Purchased files are for personal use only. You may not resell, redistribute, copy, or repackage the materials as your own product.</p>
          <p>For support or questions, contact {CONTACT_EMAIL}.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

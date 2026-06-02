import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { CONTACT_EMAIL } from "@/lib/constants";

export default function RefundPage() {
  return (
    <main className="min-h-screen bg-[#0f1515] text-white">
      <Nav />
      <section className="mx-auto max-w-3xl px-5 py-20">
        <h1 className="mb-6 text-4xl font-black">Refund Policy</h1>
        <div className="space-y-5 leading-8 text-[#b7c0c0]">
          <p>Because this is a digital download, all sales are generally final once access has been provided.</p>
          <p>If you experience a technical issue accessing your files, contact us and we will help resolve it.</p>
          <p>Refund requests may be reviewed on a case-by-case basis. Contact {CONTACT_EMAIL}.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

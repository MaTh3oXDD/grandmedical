import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="py-24 md:py-32">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 lg:px-20">
          <h1 className="font-serif text-4xl mb-6">Kontakt</h1>
          <p className="mb-4">ul. Brzezińska 5/15, 92-103 Łódź</p>
          <p className="mb-2">Telefon: <a href="tel:+48422081080" className="text-accent">+48 42 208 10 80</a></p>
          <p className="mb-6">E-mail: <a href="mailto:kontakt@grandmedical.pl" className="text-accent">kontakt@grandmedical.pl</a></p>

          <h2 className="font-serif text-2xl mt-8 mb-4">Godziny otwarcia</h2>
          <p>Pon – Pt: 08:00 – 20:00</p>
          <p>Szpital: 24h / 7 dni</p>
        </div>
      </section>
      <Footer />
    </main>
  )
}

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function InnowacjePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="py-24 md:py-32">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 lg:px-20">
          <h1 className="font-serif text-4xl mb-6">Innowacje</h1>
          <p>Opis innowacyjnych rozwiązań i technologii stosowanych w klinice.</p>
        </div>
      </section>
      <Footer />
    </main>
  )
}

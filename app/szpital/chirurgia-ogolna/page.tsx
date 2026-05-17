import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SubpageHero } from "@/components/subpages/subpage-hero"
import { SubpageContent } from "@/components/subpages/subpage-content"
import { SubpageTeam } from "@/components/subpages/subpage-team"
import { SubpageBlog } from "@/components/subpages/subpage-blog"

export const metadata: Metadata = {
  title: "Chirurgia ogolna — Szpital | Grand Medical Clinic",
  description: "Zabiegi operacyjne w zakresie chirurgii ogolnej, laparoskopia i procedury maloinwazyjne w Grand Medical Clinic.",
}

export default function ChirurgiaOgolnaPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <SubpageHero
        breadcrumb={[
          { label: "Szpital", href: "/szpital" },
          { label: "Chirurgia ogolna" },
        ]}
        title="Chirurgia ogolna"
        description="Wykonujemy szeroki zakres zabiegow chirurgicznych — od operacji planowych po procedury maloinwazyjne z wykorzystaniem technik laparoskopowych."
        image="./images/surgery.jpg"
      />
      <SubpageContent
        sections={[
          {
            title: "Zakres uslug",
            content: "Oddzial chirurgii ogolnej oferuje kompleksowe leczenie operacyjne chorob jamy brzusznej, przepuklin, schorzen tarczycy i innych. Stosujemy nowoczesne techniki maloinwazyjne, ktore skracaja czas rekonwalescencji.",
            bullets: [
              "Operacje przepuklin (pachwinowych, pepkowych, pooperacyjnych)",
              "Cholecystektomia laparoskopowa",
              "Operacje tarczycy i przytarczyc",
              "Chirurgia jelita grubego",
              "Zabiegi w zakresie chirurgii jednego dnia",
            ],
          },
          {
            title: "Dlaczego my",
            content: "Nasz blok operacyjny dysponuje dwoma salami zabiegowymi wyposaszonymi w nowoczesny sprzet. Zespol doswiadczonych chirurgow zapewnia bezpieczne i skuteczne leczenie.",
            bullets: [
              "Doswiadczony zespol chirurgiczny",
              "Nowoczesny sprzet laparoskopowy",
              "Krotki czas oczekiwania na zabieg",
              "Pelna opieka pooperacyjna",
            ],
          },
        ]}
      />
      <SubpageTeam
        team={[
          { name: "Dr Piotr Nowak", role: "Ordynator, Chirurg ogolny", image: "./images/surgery.jpg" },
          { name: "Dr Maria Kowalczyk", role: "Chirurg, specjalista laparoskopii", image: "./images/consultation.jpg" },
          { name: "Dr Jakub Wisniewski", role: "Chirurg ogolny", image: "./images/consultation.jpg" },
        ]}
      />
      <SubpageBlog category="Chirurgia" parentCategory="szpital" />
      <Footer />
    </main>
  )
}

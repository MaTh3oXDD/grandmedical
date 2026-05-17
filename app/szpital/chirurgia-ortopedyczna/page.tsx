import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SubpageHero } from "@/components/subpages/subpage-hero"
import { SubpageContent } from "@/components/subpages/subpage-content"
import { SubpageTeam } from "@/components/subpages/subpage-team"
import { SubpageBlog } from "@/components/subpages/subpage-blog"

export const metadata: Metadata = {
  title: "Chirurgia ortopedyczna — Szpital | Grand Medical Clinic",
  description: "Operacje narzadu ruchu, endoprotezoplastyka, artroskopia i leczenie urazow w Grand Medical Clinic.",
}

export default function ChirurgiaOrtopedycznaPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <SubpageHero
        breadcrumb={[
          { label: "Szpital", href: "/szpital" },
          { label: "Chirurgia ortopedyczna" },
        ]}
        title="Chirurgia ortopedyczna"
        description="Specjalizujemy sie w leczeniu operacyjnym schorzen i urazow narzadu ruchu. Wykonujemy endoprotezoplastyke, artroskopie i rekonstrukcje wiezadel."
        image="/images/surgery.jpg"
      />
      <SubpageContent
        sections={[
          {
            title: "Zakres uslug",
            content: "Oddział ortopedii oferuje pelny zakres leczenia operacyjnego schorzen narzadu ruchu — od artroskopii po wymiane stawow.",
            bullets: [
              "Endoprotezoplastyka stawu biodrowego i kolanowego",
              "Artroskopia kolana i barku",
              "Rekonstrukcja wiezadel krzyzowych (ACL, PCL)",
              "Leczenie zlaaman i urazow sportowych",
              "Operacje kregoslupa",
            ],
          },
          {
            title: "Rehabilitacja pooperacyjna",
            content: "Kazdy pacjent po zabiegu ortopedycznym otrzymuje indywidualny plan rehabilitacji, ktory rozpoczyna sie juz w szpitalu i kontynuowany jest ambulatoryjnie.",
            bullets: [
              "Wczesna mobilizacja po zabiegu",
              "Indywidualny plan fizjoterapii",
              "Kontrola bolu i obrzeku",
              "Przygotowanie do samodzielnosci",
            ],
          },
        ]}
      />
      <SubpageTeam
        team={[
          { name: "Dr Marek Jankowski", role: "Ordynator, Ortopeda", image: "/images/surgery.jpg" },
          { name: "Dr Karolina Maj", role: "Ortopeda, spec. artroskopii", image: "/images/consultation.jpg" },
          { name: "Mgr Tomasz Adamski", role: "Fizjoterapeuta", image: "/images/rehab.jpg" },
        ]}
      />
      <SubpageBlog category="Ortopedia" parentCategory="szpital" />
      <Footer />
    </main>
  )
}

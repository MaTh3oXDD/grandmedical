import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SubpageHero } from "@/components/subpages/subpage-hero"
import { SubpageContent } from "@/components/subpages/subpage-content"
import { SubpageTeam } from "@/components/subpages/subpage-team"
import { SubpageBlog } from "@/components/subpages/subpage-blog"

export const metadata: Metadata = {
  title: "Neurochirurgia — Szpital | Grand Medical Clinic",
  description: "Zabiegi na kregoslupie, leczenie dyskopati, przepuklin i schorzen neurologicznych w Grand Medical Clinic.",
}

export default function NeurochirurgiaPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <SubpageHero
        breadcrumb={[
          { label: "Szpital", href: "/szpital" },
          { label: "Neurochirurgia" },
        ]}
        title="Neurochirurgia"
        description="Wykonujemy zabiegi na kregoslupie, leczenie dyskopati i przepuklin kregoslupa z wykorzystaniem technik mikrochirurgicznych."
        image="/images/neurology.jpg"
      />
      <SubpageContent
        sections={[
          {
            title: "Zakres zabiegow",
            content: "Oddzial neurochirurgii specjalizuje sie w leczeniu operacyjnym schorzen kregoslupa i obwodowego ukladu nerwowego.",
            bullets: [
              "Mikrodiscektomia — usuniecie przepukliny dysku",
              "Laminektomia — odbarczenie kanalu kregowego",
              "Stabilizacja kregoslupa",
              "Leczenie stenoz kregoslupa",
              "Operacje guzow kregoslupa",
            ],
          },
          {
            title: "Nowoczesne techniki",
            content: "Stosujemy techniki maloinwazyjne i mikrochirurgiczne, ktore minimalizuja uszkodzenie tkanek i przyspieszaja powrot do zdrowia.",
            bullets: [
              "Techniki mikrochirurgiczne",
              "Zabiegi maloinwazyjne",
              "Srodoperacyjny monitoring neurologiczny",
              "Kompleksowa opieka pooperacyjna",
            ],
          },
        ]}
      />
      <SubpageTeam
        team={[
          { name: "Dr Tomasz Kaczmarek", role: "Neurochirurg", image: "/images/neurology.jpg" },
          { name: "Dr Agnieszka Pawlak", role: "Neurochirurg", image: "/images/consultation.jpg" },
          { name: "Dr Robert Szymanski", role: "Neurolog konsultujacy", image: "/images/consultation.jpg" },
        ]}
      />
      <SubpageBlog category="Neurochirurgia" parentCategory="szpital" />
      <Footer />
    </main>
  )
}

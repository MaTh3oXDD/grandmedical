import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DepartmentHero } from "@/components/departments/department-hero"
import { DepartmentServices } from "@/components/departments/department-services"
import { DepartmentTeam } from "@/components/departments/department-team"
import { DepartmentBlog } from "@/components/departments/department-blog"

export const metadata: Metadata = {
  title: "Poradnia Chirurgiczna — Grand Medical Clinic",
  description: "Konsultacje chirurgiczne, w tym ocena wad postawy i kwalifikacje do zabiegow.",
}

export default function ChirurgicznaPage() {
  const services = [
    { title: "Konsultacje chirurgiczne", href: "/przychodnia/chirurgiczna", description: "Ocena wad postawy i kwalifikacje." },
    { title: "Konsultacje przedzabiegowe", href: "/przychodnia/diagnostyka-i-leczenia", description: "Przygotowanie do zabiegow." },
  ]

  const team = [
    { name: "Dr Andrzej Gorski", role: "Chirurg", image: "./images/surgery.jpg" },
    { name: "Dr Anna Malinowska", role: "Chirurg", image: "./images/consultation.jpg" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <DepartmentHero
        title="Poradnia Chirurgiczna"
        subtitle="Wady postawy i zabiegi"
        description="Ocena wad postawy, kwalifikacje do zabiegow oraz konsultacje pooperacyjne." 
        image="./images/surgery.jpg"
        features={["Konsultacje", "Kwalifikacje", "Opieka poszpitalna" ]}
      />

      <DepartmentServices title="Usługi" services={services} />

      <DepartmentTeam title="Nasi lekarze" team={team} />

      <DepartmentBlog category="Poradnia" categorySlug="przychodnia" />

      <Footer />
    </main>
  )
}

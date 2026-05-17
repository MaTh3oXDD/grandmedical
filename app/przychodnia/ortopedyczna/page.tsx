import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DepartmentHero } from "@/components/departments/department-hero"
import { DepartmentServices } from "@/components/departments/department-services"
import { DepartmentTeam } from "@/components/departments/department-team"
import { DepartmentBlog } from "@/components/departments/department-blog"

export const metadata: Metadata = {
  title: "Poradnia Ortopedyczna — Grand Medical Clinic",
  description: "Konsultacje ortopedyczne, diagnostyka urazow i przewleklych schorzen ukladu ruchu.",
}

export default function OrtopedycznaPage() {
  const services = [
    { title: "Konsultacje ortopedyczne", href: "/przychodnia/ortopedyczna", description: "Ocena urazow i terapii." },
    { title: "USG i kwalifikacje", href: "/przychodnia/diagnostyka-i-leczenia", description: "Badania obrazowe i kwalifikacje do leczenia." },
  ]

  const team = [
    { name: "Dr Pawel Zielinski", role: "Ortopeda", image: "./images/consultation.jpg" },
    { name: "Dr Ewa Kowalczyk", role: "Ortopeda", image: "./images/consultation.jpg" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <DepartmentHero
        title="Poradnia Ortopedyczna"
        subtitle="Opieka nad ukladem ruchu"
        description="Diagnoza i leczenie urazow, przewleklych schorzen oraz kwalifikacje do zabiegow." 
        image="./images/consultation.jpg"
        features={["Konsultacje", "USG", "Rehabilitacja" ]}
      />

      <DepartmentServices title="Usługi" services={services} />

      <DepartmentTeam title="Nasi lekarze" team={team} />

      <DepartmentBlog category="Poradnia" categorySlug="przychodnia" />

      <Footer />
    </main>
  )
}

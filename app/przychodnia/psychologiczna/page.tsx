import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DepartmentHero } from "@/components/departments/department-hero"
import { DepartmentServices } from "@/components/departments/department-services"
import { DepartmentTeam } from "@/components/departments/department-team"
import { DepartmentBlog } from "@/components/departments/department-blog"

export const metadata: Metadata = {
  title: "Poradnia Psychologiczna — Grand Medical Clinic",
  description: "Wsparcie psychologiczne, terapie indywidualne i grupowe.",
}

export default function PsychologicznaPage() {
  const services = [
    { title: "Konsultacje psychologiczne", href: "/przychodnia/psychologiczna", description: "Terapia indywidualna i grupowa." },
    { title: "Terapia rodzin", href: "/przychodnia/psychologiczna", description: "Wsparcie psychologiczne dla rodzin." },
  ]

  const team = [
    { name: "Mgr Joanna Kowal", role: "Psycholog", image: "/images/consultation.jpg" },
    { name: "Mgr Tomasz Baranski", role: "Psychoterapeuta", image: "/images/consultation.jpg" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <DepartmentHero
        title="Poradnia Psychologiczna"
        subtitle="Wsparcie psychologiczne"
        description="Konsultacje, terapia i wsparcie psychologiczne dla doroslych i mlodziezy." 
        image="/images/consultation.jpg"
        features={["Konsultacje", "Terapia indywidualna", "Terapia grupowa" ]}
      />

      <DepartmentServices title="Usługi" services={services} />

      <DepartmentTeam title="Zespol" team={team} />

      <DepartmentBlog category="Poradnia" categorySlug="przychodnia" />

      <Footer />
    </main>
  )
}

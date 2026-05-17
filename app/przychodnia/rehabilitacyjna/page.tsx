import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DepartmentHero } from "@/components/departments/department-hero"
import { DepartmentServices } from "@/components/departments/department-services"
import { DepartmentTeam } from "@/components/departments/department-team"
import { DepartmentBlog } from "@/components/departments/department-blog"

export const metadata: Metadata = {
  title: "Poradnia Rehabilitacyjna — Grand Medical Clinic",
  description: "Programy rehabilitacyjne, fizjoterapia i terapie indywidualne.",
}

export default function RehabilitacyjnaPage() {
  const services = [
    { title: "Fizjoterapia", href: "/przychodnia/rehabilitacyjna", description: "Programy rehabilitacyjne dopasowane do pacjenta." },
    { title: "Terapia manualna", href: "/przychodnia/rehabilitacyjna", description: "Terapie przeciwbolowe i funkcjonalne." },
  ]

  const team = [
    { name: "Mgr Katarzyna Nowak", role: "Fizjoterapeuta", image: "./images/reception.jpg" },
    { name: "Mgr Piotr Wolski", role: "Fizjoterapeuta", image: "./images/consultation.jpg" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <DepartmentHero
        title="Poradnia Rehabilitacyjna"
        subtitle="Rehabilitacja i fizjoterapia"
        description="Indywidualne programy rehabilitacyjne, zajecia i terapia manualna." 
        image="./images/reception.jpg"
        features={["Fizjoterapia", "Terapia manualna", "Programy powrotu do sprawnosci" ]}
      />

      <DepartmentServices title="Usługi" services={services} />

      <DepartmentTeam title="Nasi specjalisci" team={team} />

      <DepartmentBlog category="Poradnia" categorySlug="przychodnia" />

      <Footer />
    </main>
  )
}

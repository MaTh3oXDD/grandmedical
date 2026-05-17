import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DepartmentHero } from "@/components/departments/department-hero"
import { DepartmentServices } from "@/components/departments/department-services"
import { DepartmentTeam } from "@/components/departments/department-team"
import { DepartmentBlog } from "@/components/departments/department-blog"

export const metadata: Metadata = {
  title: "Diagnostyka i leczenie — Przychodnia — Grand Medical Clinic",
  description: "Badania diagnostyczne i kompleksowe leczenie — obrazowanie, konsultacje i terapie.",
}

export default function DiagnostykaILeczeniaPage() {
  const services = [
    { title: "USG", href: "/przychodnia/diagnostyka-i-leczenia", description: "Badania USG i diagnostyka obrazowa." },
    { title: "Badania laboratoryjne", href: "/przychodnia/diagnostyka-i-leczenia", description: "Wspolpraca diagnostyczna i wyniki online." },
  ]

  const team = [
    { name: "Dr Anna Lis", role: "Radiolog", image: "./images/consultation.jpg" },
    { name: "Dr Krzysztof Maj", role: "Diagnosta", image: "./images/consultation.jpg" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <DepartmentHero
        title="Diagnostyka i leczenie"
        subtitle="Badania i diagnostyka"
        description="Jedno miejsce dla badan obrazowych, laboratoryjnych i konsultacji specjalistycznych." 
        image="./images/consultation.jpg"
        features={["USG", "RTG", "Badania laboratoryjne" ]}
      />

      <DepartmentServices title="Usługi diagnostyczne" services={services} />

      <DepartmentTeam title="Zespol diagnostyki" team={team} />

      <DepartmentBlog category="Poradnia" categorySlug="przychodnia" />

      <Footer />
    </main>
  )
}

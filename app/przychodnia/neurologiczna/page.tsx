import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DepartmentHero } from "@/components/departments/department-hero"
import { DepartmentServices } from "@/components/departments/department-services"
import { DepartmentTeam } from "@/components/departments/department-team"
import { DepartmentBlog } from "@/components/departments/department-blog"

export const metadata: Metadata = {
  title: "Poradnia Neurologiczna — Grand Medical Clinic",
  description: "Diagnostyka i leczenie schorzen neurologicznych. Konsultacje i terapia." ,
}

export default function NeurologicznaPage() {
  const services = [
    { title: "Konsultacje neurologiczne", href: "/przychodnia/neurologiczna", description: "Ocena neurologiczna i dalsza diagnostyka." },
    { title: "EEG i badania pomocnicze", href: "/przychodnia/diagnostyka-i-leczenia", description: "Badania neurofizjologiczne." },
  ]

  const team = [
    { name: "Dr n. med. Marek Szymanski", role: "Neurolog", image: "/images/neurology.jpg" },
    { name: "Dr Katarzyna Borkowska", role: "Neurolog", image: "/images/consultation.jpg" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <DepartmentHero
        title="Poradnia Neurologiczna"
        subtitle="Diagnostyka i terapia"
        description="Kompleksowa opieka neurologiczna: konsultacje, diagnostyka i terapia." 
        image="/images/neurology.jpg"
        features={["Konsultacje", "EEG", "Terapia" ]}
      />

      <DepartmentServices title="Usługi" services={services} />

      <DepartmentTeam title="Nasi lekarze" team={team} />

      <DepartmentBlog category="Poradnia" categorySlug="przychodnia" />

      <Footer />
    </main>
  )
}

import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DepartmentHero } from "@/components/departments/department-hero"
import { DepartmentServices } from "@/components/departments/department-services"
import { DepartmentTeam } from "@/components/departments/department-team"
import { DepartmentBlog } from "@/components/departments/department-blog"

export const metadata: Metadata = {
  title: "Poradnia Leczenia Bólu — Grand Medical Clinic",
  description: "Multidyscyplinarne programy leczenia bolu przewleklego.",
}

export default function LeczenieBoluPage() {
  const services = [
    { title: "Konsultacje bolowe", href: "/przychodnia/leczenie-bolu", description: "Ocena i plan leczenia bolu." },
    { title: "Blokady i terapie", href: "/przychodnia/leczenie-bolu", description: "Procedury przeciwbolowe i rehabilitacja." },
  ]

  const team = [
    { name: "Dr Klaudia Nowicka", role: "Specjalista leczenia bolu", image: "/images/consultation.jpg" },
    { name: "Dr Lukasz Malec", role: "Anestezjolog", image: "/images/consultation.jpg" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <DepartmentHero
        title="Poradnia Leczenia Bólu"
        subtitle="Leczenie i ulga"
        description="Indywidualne programy leczenia bolu przewleklego — farmakoterapia, blokady i rehabilitacja." 
        image="/images/consultation.jpg"
        features={["Ocena bolu", "Blokady", "Terapia" ]}
      />

      <DepartmentServices title="Usługi" services={services} />

      <DepartmentTeam title="Zespol" team={team} />

      <DepartmentBlog category="Poradnia" categorySlug="przychodnia" />

      <Footer />
    </main>
  )
}

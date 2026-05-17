import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DepartmentHero } from "@/components/departments/department-hero"
import { DepartmentServices } from "@/components/departments/department-services"
import { DepartmentTeam } from "@/components/departments/department-team"
import { DepartmentBlog } from "@/components/departments/department-blog"

export const metadata: Metadata = {
  title: "Poradnia Urologiczna — Grand Medical Clinic",
  description: "Konsultacje urologiczne, diagnostyka i leczenie schorzen urologicznych.",
}

export default function UrologicznaPage() {
  const services = [
    { title: "Konsultacje urologiczne", href: "/przychodnia/urologiczna", description: "Ocena i diagnostyka urologiczna." },
    { title: "USG i badania", href: "/przychodnia/diagnostyka-i-leczenia", description: "Badania obrazowe ukladu moczowego." },
  ]

  const team = [
    { name: "Dr Rafal Wroblewski", role: "Urolog", image: "./images/consultation.jpg" },
    { name: "Dr Marta Sadowska", role: "Urolog", image: "./images/consultation.jpg" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <DepartmentHero
        title="Poradnia Urologiczna"
        subtitle="Diagnostyka i leczenie"
        description="Kompleksowa opieka urologiczna: konsultacje, diagnostyka i procedury." 
        image="./images/consultation.jpg"
        features={["Konsultacje", "USG", "Badania" ]}
      />

      <DepartmentServices title="Usługi" services={services} />

      <DepartmentTeam title="Nasi lekarze" team={team} />

      <DepartmentBlog category="Poradnia" categorySlug="przychodnia" />

      <Footer />
    </main>
  )
}

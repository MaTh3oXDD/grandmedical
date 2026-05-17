import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DepartmentHero } from "@/components/departments/department-hero"
import { DepartmentServices } from "@/components/departments/department-services"
import { DepartmentTeam } from "@/components/departments/department-team"
import { DepartmentBlog } from "@/components/departments/department-blog"

export const metadata: Metadata = {
  title: "Poradnia Neurochirurgiczna — Grand Medical Clinic",
  description: "Konsultacje i drobne zabiegi neurochirurgiczne. Diagnostyka i leczenie schorzen ukladu nerwowego.",
}

export default function NeurochirurgicznaPage() {
  const services = [
    { title: "Konsultacja neurochirurgiczna", href: "/przychodnia/neurochirurgiczna", description: "Ocena kwalifikacji do zabiegu." },
    { title: "Diagnostyka obrazowa", href: "/przychodnia/diagnostyka-i-leczenia", description: "Badania obrazowe i konsultacje specjalistyczne." },
  ]

  const team = [
    { name: "Dr hab. Adam Kowalski", role: "Neurochirurg", image: "./images/neurology.jpg" },
    { name: "Dr Anna Maj", role: "Neurochirurg", image: "./images/consultation.jpg" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <DepartmentHero
        title="Poradnia Neurochirurgiczna"
        subtitle="Zabiegi i konsultacje"
        description="Konsultacje kwalifikacyjne i drobne zabiegi neurochirurgiczne."
        image="./images/neurology.jpg"
        features={["Konsultacje", "Diagnostyka", "Zabiegi planowe"]}
      />

      <DepartmentServices title="Usługi" services={services} />

      <DepartmentTeam title="Nasi lekarze" team={team} />

      <DepartmentBlog category="Poradnia" categorySlug="przychodnia" />

      <Footer />
    </main>
  )
}

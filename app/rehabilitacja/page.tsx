import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DepartmentHero } from "@/components/departments/department-hero"
import { DepartmentServices } from "@/components/departments/department-services"
import { DepartmentTeam } from "@/components/departments/department-team"
import { DepartmentBlog } from "@/components/departments/department-blog"

export default function RehabilitacjaPage() {
  const services = [
    { title: "Rehabilitacja neurologiczna", href: "/rehabilitacja/neurologiczna", description: "Intensywna terapia po udarach i urazach neurologicznych." },
    { title: "Rehabilitacja ortopedyczna", href: "/rehabilitacja/ortopedia", description: "Terapia po urazach i zabiegach ortopedycznych." },
    { title: "Terapia pourazowa", href: "/rehabilitacja", description: "Programy przywroceniowe po operacjach i urazach." },
  ]

  const team = [
    { name: "mgr. fizjoterapii Anna Zielinska", role: "Fizjoterapeuta neurologiczny", image: "./images/rehab.jpg" },
    { name: "mgr. fizjoterapii Piotr Lewandowski", role: "Fizjoterapeuta ortopedyczny", image: "./images/rehab.jpg" },
    { name: "dr n. med. Katarzyna Borkowska", role: "Koordynator rehabilitacji", image: "./images/consultation.jpg" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <DepartmentHero
        title="Rehabilitacja"
        subtitle="Powrot do sprawnosci"
        description="Kompleksowa rehabilitacja neurologiczna i ortopedyczna — programy indywidualne i nowoczesne metody." 
        image="./images/rehab.jpg"
        features={["Rehabilitacja neurologiczna", "Biofeedback i GeniusCare", "Programy indywidualne"]}
      />

      <DepartmentServices title="Poradnia i Oddzial Rehabilitacji" services={services} />

      <DepartmentTeam title="Zespol rehabilitacji" team={team} />

      <DepartmentBlog category="Rehabilitacja" categorySlug="rehabilitacja" />

      <Footer />
    </main>
  )
}

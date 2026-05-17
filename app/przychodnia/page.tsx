import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DepartmentHero } from "@/components/departments/department-hero"
import { DepartmentServices } from "@/components/departments/department-services"
import { DepartmentTeam } from "@/components/departments/department-team"
import { DepartmentBlog } from "@/components/departments/department-blog"

export default function PrzychodniaPage() {
  const services = [
    { title: "Neurochirurgiczna", href: "/przychodnia/neurochirurgiczna", description: "Zabiegi i konsultacje neurochirurgiczne." },
    { title: "Neurologiczna", href: "/przychodnia/neurologiczna", description: "Konsultacje i diagnostyka neurologiczna." },
    { title: "Ortopedyczna", href: "/przychodnia/ortopedyczna", description: "Ocena urazow i kwalifikacje do leczenia ortopedycznego." },
    { title: "Chirurgiczna (wad postawy)", href: "/przychodnia/chirurgiczna", description: "Konsultacje chirurgiczne, w tym wady postawy i kwalifikacje do zabiegow." },
    { title: "Rehabilitacyjna", href: "/przychodnia/rehabilitacyjna", description: "Programy rehabilitacyjne i fizjoterapia." },
    { title: "Diagnostyki i leczenia", href: "/przychodnia/diagnostyka-i-leczenia", description: "Badania diagnostyczne i terapia w jednej lokalizacji." },
    { title: "Psychologiczna", href: "/przychodnia/psychologiczna", description: "Wsparcie psychologiczne dla pacjentow." },
    { title: "Leczenia bolu", href: "/przychodnia/leczenie-bolu", description: "Multidyscyplinarne podejscie do przewleklego bolu." },
    { title: "Urologiczna", href: "/przychodnia/urologiczna", description: "Konsultacje urologiczne i diagnostyka." },
  ]

  const team = [
    { name: "dr n. med. Marek Szymanski", role: "Neurolog", image: "./images/neurology.jpg" },
    { name: "dr Agnieszka Gorska", role: "Chirurg", image: "./images/consultation.jpg" },
    { name: "mgr. Marta Polanska", role: "Specjalista leczenia bolu", image: "./images/consultation.jpg" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <DepartmentHero
        title="Przychodnia"
        subtitle="Specjalistyczna diagnostyka"
        description="Siec poradni specjalistycznych — neurologia, ortopedia, leczenie bolu i diagnostyka." 
        image="./images/consultation.jpg"
        features={["Poradnia neurologiczna", "Poradnia ortopedyczna", "Poradnia leczenia bolu"]}
      />

      <DepartmentServices title="Dostepne poradnie" services={services} />

      <DepartmentTeam title="Nasi lekarze" team={team} />

      <DepartmentBlog category="Przychodnia" categorySlug="przychodnia" />

      <Footer />
    </main>
  )
}

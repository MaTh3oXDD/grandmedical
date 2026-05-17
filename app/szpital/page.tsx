import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DepartmentHero } from "@/components/departments/department-hero"
import { DepartmentServices } from "@/components/departments/department-services"
import { DepartmentTeam } from "@/components/departments/department-team"
import { DepartmentBlog } from "@/components/departments/department-blog"

export const metadata: Metadata = {
  title: "Szpital — Grand Medical Clinic",
  description:
    "Wieloprofilowy Oddzial Zabiegowy i Oddzial Rehabilitacji Neurologicznej. Nowoczesny blok operacyjny, chirurgia ogolna, ortopedyczna i neurochirurgia.",
}

const HOSPITAL_DATA = {
  title: "Szpital",
  subtitle: "Opieka calodobowa",
  description:
    "Wieloprofilowy Oddzial Zabiegowy z dwoma salami operacyjnymi, Oddzial Rehabilitacji Neurologicznej oraz pelna opieka pooperacyjna. Zabiegi planowe i specjalistyczne wykonywane w ramach NFZ i komercyjnie.",
  image: "./images/surgery.jpg",
  services: [
    {
      title: "Chirurgia ogolna",
      href: "/szpital/chirurgia-ogolna",
      description:
        "Zabiegi operacyjne w zakresie chirurgii ogolnej, w tym laparoskopia i procedury maloinwazyjne.",
    },
    {
      title: "Chirurgia ortopedyczna",
      href: "/szpital/chirurgia-ortopedyczna",
      description:
        "Operacje narzadu ruchu, endoprotezoplastyka, artroskopia i leczenie urazow.",
    },
    {
      title: "Neurochirurgia",
      href: "/szpital/neurochirurgia",
      description:
        "Zabiegi na kregoslupie, leczenie dyskopati, przepuklin i innych schorzen neurologicznych.",
    },
  ],
  features: [
    "Nowoczesny blok operacyjny z 2 salami",
    "Opieka 24h / 7 dni w tygodniu",
    "Przyjecia NFZ i komercyjne",
    "Wczesna rehabilitacja pooperacyjna",
  ],
}

export default function SzpitalPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <DepartmentHero
        title={HOSPITAL_DATA.title}
        subtitle={HOSPITAL_DATA.subtitle}
        description={HOSPITAL_DATA.description}
        image={HOSPITAL_DATA.image}
        features={HOSPITAL_DATA.features}
      />

      <DepartmentServices title="Oddzialy i zabiegi" services={HOSPITAL_DATA.services} />

      <DepartmentTeam
        title="Zespol szpitala"
        team={[
          { name: "Dr Piotr Nowak", role: "Chirurg, Ordynator Oddzialu Zabiegowego", image: "./images/surgery.jpg" },
          { name: "Dr Anna Lewandowska", role: "Anestezjolog", image: "./images/consultation.jpg" },
          { name: "Dr Tomasz Kaczmarek", role: "Neurochirurg", image: "./images/neurology.jpg" },
          { name: "Mgr Ewa Dabrowska", role: "Pielegniarka oddzialowa", image: "./images/reception.jpg" },
        ]}
      />

      <DepartmentBlog category="Szpital" categorySlug="szpital" />

      <Footer />
    </main>
  )
}


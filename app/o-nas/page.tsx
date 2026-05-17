import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutMission } from "@/components/about/about-mission"
import { AboutTeam } from "@/components/about/about-team"

export const metadata: Metadata = {
  title: "O nas — Grand Medical Clinic",
  description: "Poznaj Grand Medical Clinic — specjalistyczne centrum medyczne w Lodzi laczace opieke szpitalna, rehabilitacje i poradnie specjalistyczne.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AboutHero />
      <AboutMission />
      <AboutTeam />
      <Footer />
    </main>
  )
}

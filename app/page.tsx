import { Header } from "@/components/header"
import { HeroSelector } from "@/components/sections/hero-selector"
import { AboutPreview } from "@/components/sections/about-preview"
import { BlogPreview } from "@/components/sections/blog-preview"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSelector />
      <AboutPreview />
      <BlogPreview />
      <Footer />
    </main>
  )
}

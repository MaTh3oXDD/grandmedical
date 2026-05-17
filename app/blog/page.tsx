import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogPreview } from "@/components/sections/blog-preview"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <BlogPreview />
      </div>
      <Footer />
    </main>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"

const BLOG_POSTS = [
  {
    id: 1,
    category: "Rehabilitacja",
    categoryHref: "/rehabilitacja",
    title: "Nowoczesne metody rehabilitacji neurologicznej",
    excerpt: "Poznaj innowacyjne podejscie do rehabilitacji po udarze mozgu z wykorzystaniem biofeedbacku i platform interaktywnych.",
    image: "./images/rehab.jpg",
    date: "12 maja 2024",
  },
  {
    id: 2,
    category: "Szpital",
    categoryHref: "/szpital",
    title: "Chirurgia maloinwazyjna — korzysci dla pacjenta",
    excerpt: "Dlaczego zabiegi laparoskopowe oznaczaja szybszy powrot do zdrowia i mniejsze ryzyko powiklan.",
    image: "./images/surgery.jpg",
    date: "8 maja 2024",
  },
  {
    id: 3,
    category: "Przychodnia",
    categoryHref: "/przychodnia",
    title: "Kiedy udac sie do poradni leczenia bolu?",
    excerpt: "Przewlekly bol moze znaczaco obnizyc jakosc zycia. Dowiedz sie, jak mozemy Ci pomoc.",
    image: "./images/consultation.jpg",
    date: "2 maja 2024",
  },
]

export function BlogPreview() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 bg-secondary/30 overflow-hidden"
    >
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transitionProperty: "all",
            transitionDuration: "0.8s",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-accent" />
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                Aktualnosci
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] text-foreground">
              Blog medyczny
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-3 text-sm tracking-[0.1em] uppercase text-foreground hover:text-accent transition-colors duration-300 group"
          >
            <span>Wszystkie artykuly</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <article
              key={post.id}
              className="group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transitionProperty: "all",
                transitionDuration: "0.8s",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: `${0.1 + index * 0.1}s`,
              }}
            >
              <Link href="/blog" className="block space-y-4">
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs">
                    <span className="tracking-[0.2em] uppercase text-accent">
                      {post.category}
                    </span>
                    <span className="w-1 h-1 bg-border rounded-full" />
                    <span className="text-muted-foreground">{post.date}</span>
                  </div>

                  <h3 className="font-serif text-xl font-light text-foreground group-hover:text-accent transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

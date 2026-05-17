"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"

interface DepartmentBlogProps {
  category: string
  categorySlug: string
}

const BLOG_POSTS_BY_CATEGORY: Record<string, { title: string; excerpt: string; date: string; image: string }[]> = {
  szpital: [
    { title: "Chirurgia maloinwazyjna — korzysci dla pacjenta", excerpt: "Dlaczego zabiegi laparoskopowe oznaczaja szybszy powrot do zdrowia.", date: "8 maja 2024", image: "/images/surgery.jpg" },
    { title: "Przygotowanie do zabiegu operacyjnego", excerpt: "Co warto wiedziec przed planowana operacja w naszym szpitalu.", date: "2 maja 2024", image: "/images/consultation.jpg" },
  ],
  rehabilitacja: [
    { title: "Nowoczesne metody rehabilitacji neurologicznej", excerpt: "Poznaj innowacyjne podejscie do rehabilitacji po udarze mozgu.", date: "12 maja 2024", image: "/images/rehab.jpg" },
    { title: "Rehabilitacja po endoprotezoplastyce", excerpt: "Jak wrocic do pelnej sprawnosci po wymianie stawu.", date: "5 maja 2024", image: "/images/rehab.jpg" },
  ],
  przychodnia: [
    { title: "Kiedy udac sie do poradni leczenia bolu?", excerpt: "Przewlekly bol moze znaczaco obnizyc jakosc zycia.", date: "10 maja 2024", image: "/images/consultation.jpg" },
    { title: "Diagnostyka neurologiczna — badania i mozliwosci", excerpt: "Przeglad badan dostepnych w poradni neurologicznej.", date: "1 maja 2024", image: "/images/neurology.jpg" },
  ],
}

export function DepartmentBlog({ category, categorySlug }: DepartmentBlogProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const posts = BLOG_POSTS_BY_CATEGORY[categorySlug] || BLOG_POSTS_BY_CATEGORY.szpital

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
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
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent" />
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Blog</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] text-foreground">
              Aktualnosci — {category}
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 text-sm tracking-[0.1em] uppercase text-foreground hover:text-accent transition-colors duration-300 group"
          >
            <span>Wszystkie artykuly</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <article
              key={post.title}
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
              <Link href="/blog" className="block">
                <div className="relative aspect-[16/9] overflow-hidden mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                </div>
                <div className="flex items-center gap-4 text-xs mb-3">
                  <span className="tracking-[0.2em] uppercase text-accent">{category}</span>
                  <span className="w-1 h-1 bg-border rounded-full" />
                  <span className="text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="font-serif text-xl font-light text-foreground group-hover:text-accent transition-colors duration-300 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

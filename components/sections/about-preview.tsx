"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export function AboutPreview() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 bg-background overflow-hidden"
    >
      {/* Architectural grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[10%] top-0 w-px h-full bg-border/50" />
        <div className="absolute right-[15%] top-0 w-px h-full bg-border/50" />
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div
            className="lg:col-span-5 space-y-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              transitionProperty: "all",
              transitionDuration: "1s",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-accent" />
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                O nas
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] tracking-[-0.02em] text-foreground">
              Specjalistyczne centrum medyczne
              <span className="block text-accent italic mt-2">w sercu Lodzi</span>
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-lg">
              Grand Medical Clinic to miejsce, gdzie nowoczesna medycyna spotyka sie z indywidualnym podejsciem do pacjenta. Laczymy opieke szpitalna, rehabilitacje i poradnie specjalistyczne pod jednym dachem.
            </p>

            <div className="grid grid-cols-2 gap-8 py-6 border-y border-border">
              <div>
                <p className="font-serif text-4xl md:text-5xl font-light text-foreground">8+</p>
                <p className="text-sm text-muted-foreground mt-2">Poradni specjalistycznych</p>
              </div>
              <div>
                <p className="font-serif text-4xl md:text-5xl font-light text-foreground">2</p>
                <p className="text-sm text-muted-foreground mt-2">Sale operacyjne</p>
              </div>
            </div>

            <Link
              href="/o-nas"
              className="inline-flex items-center gap-3 text-sm tracking-[0.1em] uppercase text-foreground hover:text-accent transition-colors duration-300 group"
            >
              <span>Poznaj nas blizej</span>
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

          {/* Image */}
          <div
            className="lg:col-span-7 relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(40px)",
              transitionProperty: "all",
              transitionDuration: "1s",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: "0.2s",
            }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="./images/reception.jpg"
                alt="Grand Medical Clinic recepcja"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-primary/5" />
            </div>
            {/* Corner accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-accent" />
          </div>
        </div>
      </div>
    </section>
  )
}

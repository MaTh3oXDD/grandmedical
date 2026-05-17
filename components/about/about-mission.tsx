"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const VALUES = [
  {
    number: "01",
    title: "Kompleksowosc",
    description: "Szpital, rehabilitacja i poradnie specjalistyczne w jednym miejscu — pelna sciezka leczenia bez zbednych przenosin.",
  },
  {
    number: "02",
    title: "Nowoczesnosc",
    description: "Blok operacyjny z dwoma salami, zaawansowana diagnostyka i innowacyjne metody rehabilitacji.",
  },
  {
    number: "03",
    title: "Indywidualne podejscie",
    description: "Kazdy pacjent to osobna historia — tworzymy plany leczenia dopasowane do konkretnych potrzeb.",
  },
  {
    number: "04",
    title: "Dostepnosc",
    description: "Przyjmujemy pacjentow NFZ i komercyjnych. Szpital dziala 24 godziny na dobe, 7 dni w tygodniu.",
  },
]

export function AboutMission() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 lg:py-40 bg-background">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Mission statement */}
        <div
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-24"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transitionProperty: "all",
            transitionDuration: "1s",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent" />
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Nasza misja</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] tracking-[-0.02em] text-foreground">
              Zdrowie, komfort i skuteczny powrot do sprawnosci
            </h2>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Placowka wspiera pacjentow w diagnostyce, leczeniu i powrocie do sprawnosci. Oferujemy leczenie stacjonarne, zabiegi operacyjne oraz specjalistyczna opieke po zabiegu.
            </p>
            <p>
              Wieloprofilowy Oddzial Zabiegowy dysponuje nowoczesnym blokiem operacyjnym z dwiema salami zabiegowymi. Wykonujemy zarowno zabiegi planowe, jak i procedury specjalistyczne wymagajace zaawansowanego zaplecza medycznego.
            </p>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((value, index) => (
            <div
              key={value.number}
              className="group p-8 border border-border hover:border-accent transition-colors duration-500"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionProperty: "all",
                transitionDuration: "0.8s",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: `${0.1 + index * 0.1}s`,
              }}
            >
              <span className="font-mono text-xs text-accent mb-4 block">{value.number}</span>
              <h3 className="font-serif text-xl font-light text-foreground mb-3">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-border"
          style={{
            opacity: isVisible ? 1 : 0,
            transitionProperty: "opacity",
            transitionDuration: "1s",
            transitionDelay: "0.5s",
          }}
        >
          {[
            { value: "8+", label: "Poradni specjalistycznych" },
            { value: "2", label: "Sale operacyjne" },
            { value: "24h", label: "Opieka szpitalna" },
            { value: "NFZ", label: "I pacjenci komercyjni" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="font-serif text-4xl md:text-5xl font-light text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

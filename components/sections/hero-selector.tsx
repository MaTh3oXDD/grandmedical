"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

const AREAS = [
  {
    id: "szpital",
    number: "01",
    label: "Szpital",
    tagline: "Opieka calodobowa",
    description:
      "Wieloprofilowy Oddzial Zabiegowy z dwoma salami operacyjnymi, Oddzial Rehabilitacji Neurologicznej oraz pelna opieka pooperacyjna. Zabiegi planowe i specjalistyczne wykonywane w ramach NFZ i komercyjnie.",
    bullets: [
      "Wieloprofilowy Oddzial Zabiegowy",
      "Oddzial Rehabilitacji Neurologicznej",
      "Chirurgia ogolna i ortopedyczna",
      "Opieka 24h / 7 dni w tygodniu",
    ],
    image: "/images/surgery.jpg",
    href: "/szpital",
  },
  {
    id: "rehabilitacja",
    number: "02",
    label: "Rehabilitacja",
    tagline: "Powrot do sprawnosci",
    description:
      "Kompleksowa rehabilitacja neurologiczna i ortopedyczna prowadzona ambulatoryjnie i stacjonarnie. Nowoczesne metody terapeutyczne — biofeedback, GeniusCare i interaktywne platformy treningowe.",
    bullets: [
      "Rehabilitacja neurologiczna",
      "Rehabilitacja ortopedyczna",
      "Biofeedback i GeniusCare",
      "Terapia po urazach i udarach",
    ],
    image: "/images/rehab.jpg",
    href: "/rehabilitacja",
  },
  {
    id: "przychodnia",
    number: "03",
    label: "Przychodnia",
    tagline: "Specjalistyczna diagnostyka",
    description:
      "Ponad 8 poradni specjalistycznych w jednym miejscu — od neurologii i neurochirurgii po leczenie bolu i psychologie. Konsultacje, diagnostyka i kwalifikacja do leczenia bez zbednego czekania.",
    bullets: [
      "Poradnia Neurologiczna i Neurochirurgiczna",
      "Poradnia Ortopedyczna i Chirurgiczna",
      "Poradnia Leczenia Bolu",
      "Psycholog i diagnostyka",
    ],
    image: "/images/consultation.jpg",
    href: "/przychodnia",
  },
]

export function HeroSelector() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  function handleSelect(index: number) {
    if (index === active || animating) return
    setAnimating(true)
    setTimeout(() => {
      setActive(index)
      setAnimating(false)
    }, 350)
  }

  const current = AREAS[active]

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-primary text-primary-foreground overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        {AREAS.map((area, index) => (
          <div
            key={area.id}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: active === index ? 1 : 0 }}
          >
            <Image
              src={area.image}
              alt={area.label}
              fill
              className="object-cover"
              sizes="100vw"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-primary/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
      </div>

      {/* Architectural Grid Lines */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="absolute left-[10%] top-0 w-px h-full bg-primary-foreground/5" />
        <div className="absolute left-[30%] top-0 w-px h-full bg-primary-foreground/5" />
        <div className="absolute right-[20%] top-0 w-px h-full bg-primary-foreground/5" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Header */}
        <div
          className="mb-12 md:mb-16"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(30px)",
            transitionProperty: "all",
            transitionDuration: "1s",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: "0.2s",
          }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-accent" />
            <span className="text-xs tracking-[0.3em] uppercase text-primary-foreground/50">
              Grand Medical Clinic — Lodz
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-[-0.02em] max-w-4xl text-pretty">
            Kompleksowa opieka medyczna
            <span className="block text-accent italic mt-2">w jednym miejscu</span>
          </h1>
        </div>

        {/* Selector Tabs */}
        <div
          className="flex flex-wrap gap-0 mb-10 md:mb-14 border-b border-primary-foreground/10"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(20px)",
            transitionProperty: "all",
            transitionDuration: "0.8s",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: "0.4s",
          }}
        >
          {AREAS.map((area, index) => (
            <button
              key={area.id}
              type="button"
              onClick={() => handleSelect(index)}
              className="relative flex items-center gap-3 md:gap-4 px-5 md:px-10 py-5 text-left transition-all duration-300 group"
              aria-selected={active === index}
            >
              <span
                className="font-mono text-xs transition-colors duration-300"
                style={{ color: active === index ? "oklch(0.60 0.12 240)" : "oklch(0.985 0.002 240 / 0.3)" }}
              >
                {area.number}
              </span>
              <span
                className="font-serif text-lg md:text-2xl font-light transition-colors duration-300"
                style={{
                  color: active === index ? "oklch(0.985 0.002 240)" : "oklch(0.985 0.002 240 / 0.45)",
                }}
              >
                {area.label}
              </span>
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent transition-all duration-500"
                style={{ transform: active === index ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left" }}
              />
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <div
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          style={{
            opacity: isLoaded ? 1 : 0,
            transitionProperty: "opacity",
            transitionDuration: "0.8s",
            transitionTimingFunction: "ease",
            transitionDelay: "0.5s",
          }}
        >
          {/* Text */}
          <div
            className="lg:col-span-5 xl:col-span-5 flex flex-col gap-6"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? "translateX(-12px)" : "translateX(0)",
              transitionProperty: "all",
              transitionDuration: "0.4s",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-accent mb-3">
                {current.tagline}
              </p>
              <p className="text-base md:text-lg leading-relaxed text-primary-foreground/70 max-w-lg">
                {current.description}
              </p>
            </div>

            <ul className="space-y-3">
              {current.bullets.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-primary-foreground/60">
                  <span className="w-4 h-px bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 flex-wrap pt-2">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm tracking-[0.1em] uppercase text-primary bg-primary-foreground hover:bg-primary-foreground/90 transition-all duration-300"
              >
                Umow wizyte
              </Link>
              <Link
                href={current.href}
                className="inline-flex items-center gap-3 border border-primary-foreground/20 hover:border-primary-foreground/60 px-6 py-3 text-sm tracking-[0.1em] uppercase text-primary-foreground/70 hover:text-primary-foreground transition-all duration-300 group/link"
              >
                <span>Dowiedz sie wiecej</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image preview card */}
          <div
            className="lg:col-span-7 xl:col-span-7 relative aspect-[16/10] overflow-hidden"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? "scale(0.98)" : "scale(1)",
              transitionProperty: "all",
              transitionDuration: "0.4s",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {AREAS.map((area, index) => (
              <Image
                key={area.id}
                src={area.image}
                alt={area.label}
                fill
                className="object-cover transition-opacity duration-700"
                style={{ opacity: active === index ? 1 : 0 }}
                sizes="(max-width: 768px) 100vw, 55vw"
                priority={index === 0}
              />
            ))}
            <div className="absolute inset-0 bg-primary/10" />
            <div className="absolute bottom-0 left-0 px-5 py-3 bg-primary/80 backdrop-blur-sm">
              <span className="text-xs tracking-[0.2em] uppercase text-primary-foreground/70">
                {current.label} — GMC
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3 z-20"
        style={{
          opacity: isLoaded ? 1 : 0,
          transitionProperty: "opacity",
          transitionDuration: "1s",
          transitionTimingFunction: "ease",
          transitionDelay: "1s"
        }}
      >
        <span className="text-xs tracking-[0.2em] uppercase text-primary-foreground/50">Przewin</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary-foreground/40 to-transparent relative overflow-hidden">
          <div className="absolute inset-0 w-full bg-accent animate-pulse" />
        </div>
      </div>
    </section>
  )
}

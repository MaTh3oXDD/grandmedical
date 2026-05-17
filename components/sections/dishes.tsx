"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ImageReveal } from "@/components/ui/image-reveal"

export function DishesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeClinic, setActiveClinic] = useState(0)
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

  const clinics = [
    {
      id: "neurologia",
      name: "Poradnia Neurologiczna",
      subtitle: "Diagnostyka i leczenie chorób układu nerwowego",
      type: "Neurologia",
      description: "Kompleksowa diagnostyka i leczenie chorób neurologicznych — od schorzeń naczyniowych mózgu po choroby demielinizacyjne. Konsultacje w zakresie epilepsji, bólów głowy, choroby Parkinsona i neuropatii.",
      zakres: "Neurologia kliniczna",
      image: "/images/neurology.jpg",
      info: ["Choroba Parkinsona", "Stwardnienie rozsiane", "Epilepsja", "Migrena i bóle głowy"]
    },
    {
      id: "neurochirurgia",
      name: "Poradnia Neurochirurgiczna",
      subtitle: "Leczenie operacyjne schorzeń układu nerwowego",
      type: "Neurochirurgia",
      description: "Kwalifikacja i opieka pooperacyjna w zakresie neurochirurgii. Specjalizacja w leczeniu dyskopatii kręgosłupa, guzów układu nerwowego oraz pourazowych uszkodzeń rdzenia kręgowego.",
      zakres: "Neurochirurgia i kręgosłup",
      image: "/images/consultation.jpg",
      info: ["Dyskopatia lędźwiowa", "Guzy mózgu", "Urazy rdzenia", "Stenoza kanału kręgowego"]
    },
    {
      id: "ortopedia",
      name: "Poradnia Ortopedyczna",
      subtitle: "Schorzenia narządu ruchu i chirurgia ortopedyczna",
      type: "Ortopedia",
      description: "Diagnozowanie i leczenie urazów oraz chorób narządu ruchu. Kwalifikacja do artroskopii i endoprotezoplastyki, a także kompleksowa rehabilitacja pooperacyjna.",
      zakres: "Ortopedia i traumatologia",
      image: "/images/reception.jpg",
      info: ["Artroskopia stawów", "Endoprotezoplastyka", "Urazy sportowe", "Złamania i zwichnięcia"]
    }
  ]

  return (
    <section
      ref={sectionRef}
      id="poradnie"
      className="relative py-32 md:py-48 overflow-hidden bg-secondary"
    >
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 mb-20 md:mb-32">
          <div className="lg:col-span-2">
            <div
              className="flex items-center gap-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">(04)</span>
              <div className="w-8 h-px bg-border" />
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Poradnie</span>
            </div>
          </div>

          <div className="lg:col-span-10">
            <h2
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.01em] text-foreground max-w-4xl text-pretty"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transitionProperty: "all",
                transitionDuration: "0.8s",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: "0.1s"
              }}
            >
              Specjalistyczne poradnie dostosowane do Twoich potrzeb
            </h2>
          </div>
        </div>

        {/* Clinics Showcase */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Image */}
          <div className="lg:col-span-8 relative">
            <div className="relative aspect-[4/3] overflow-hidden bg-background">
              {clinics.map((clinic, index) => (
                <div
                  key={clinic.id}
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{ opacity: activeClinic === index ? 1 : 0 }}
                >
                  {activeClinic === index ? (
                    <ImageReveal
                      src={clinic.image}
                      alt={clinic.name}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 66vw"
                      priority={index === 0}
                      delay={300}
                    />
                  ) : (
                    <Image
                      src={clinic.image}
                      alt={clinic.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 66vw"
                      priority={index === 0}
                    />
                  )}
                </div>
              ))}

              {/* Type Badge */}
              <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-sm px-4 py-2">
                <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  {clinics[activeClinic].type}
                </span>
              </div>
            </div>
          </div>

          {/* Clinic Info Cards */}
          <div className="lg:col-span-4 space-y-4">
            {clinics.map((clinic, index) => (
              <button
                key={clinic.id}
                type="button"
                onClick={() => setActiveClinic(index)}
                className={`w-full text-left p-6 md:p-8 transition-all duration-500 ${
                  activeClinic === index
                    ? "bg-background"
                    : "bg-background/50 hover:bg-background/70"
                }`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transitionProperty: "all",
                  transitionDuration: "0.8s",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: `${0.2 + index * 0.1}s`
                }}
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-light text-foreground mb-1">
                      {clinic.name}
                    </h3>
                    <p className="text-sm text-muted-foreground italic">
                      {clinic.subtitle}
                    </p>
                  </div>

                  {/* Description - Only show for active clinic */}
                  <div
                    className="overflow-hidden transition-all duration-500"
                    style={{
                      maxHeight: activeClinic === index ? "300px" : "0",
                      opacity: activeClinic === index ? 1 : 0
                    }}
                  >
                    <div className="space-y-4 pt-2">
                      <p className="text-sm leading-relaxed text-foreground/70">
                        {clinic.description}
                      </p>

                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-muted-foreground uppercase tracking-wider">Zakres:</span>
                        <span className="text-foreground/60">{clinic.zakres}</span>
                      </div>

                      <ul className="grid grid-cols-2 gap-2 pt-2 border-t border-border">
                        {clinic.info.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-foreground/70">
                            <span className="w-1 h-1 mt-1.5 bg-accent shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Indicator */}
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-px bg-border" />
                    <div
                      className={`w-2 h-2 transition-all duration-500 ${
                        activeClinic === index ? "bg-accent scale-125" : "bg-border"
                      }`}
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* All clinics list */}
        <div
          className="mt-16 md:mt-24 pt-12 border-t border-border"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transitionProperty: "all",
            transitionDuration: "0.8s",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: "0.6s"
          }}
        >
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-8">
            Wszystkie poradnie
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              "Neurologiczna",
              "Neurochirurgiczna",
              "Chirurgiczna",
              "Ortopedyczna",
              "Psychologiczna",
              "Leczenia Bólu",
              "Rehabilitacyjna",
              "Diagnostyki i Leczenia Wad"
            ].map((poradnia) => (
              <span
                key={poradnia}
                className="px-4 py-2 text-sm tracking-wide text-muted-foreground border border-border hover:border-accent hover:text-accent transition-colors duration-300 cursor-default"
              >
                {poradnia}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { ImageReveal } from "@/components/ui/image-reveal"

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
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

  const steps = [
    {
      label: "Konsultacja",
      timing: "Krok 1",
      title: "Diagnoza i plan leczenia",
      description: "Zaczynamy od szczegółowej konsultacji ze specjalistą, który ocenia stan pacjenta, zleca badania diagnostyczne i przygotowuje indywidualny plan terapeutyczny.",
      details: ["Konsultacja specjalistyczna", "Badania diagnostyczne", "Ocena stanu funkcjonalnego", "Plan leczenia"]
    },
    {
      label: "Rehabilitacja",
      timing: "Krok 2",
      title: "Terapia i usprawnianie",
      description: "Wielotygodniowy program rehabilitacji neurologicznej lub ortopedycznej prowadzony przez doświadczonych fizjoterapeutów z wykorzystaniem nowoczesnych technologii.",
      details: ["Fizjoterapia indywidualna", "Biofeedback", "Platforma GeniusCare", "Terapia w wodzie"]
    },
    {
      label: "Leczenie szpitalne",
      timing: "Krok 3",
      title: "Opieka całodobowa",
      description: "Gdy konieczna jest hospitalizacja, zapewniamy kompleksową opiekę na oddziale rehabilitacji neurologicznej lub wieloprofilowym oddziale zabiegowym.",
      details: ["Oddział neurologiczny", "Opieka 24h", "Wsparcie anestezjologiczne", "Wczesna pionizacja"]
    },
    {
      label: "Kontrola",
      timing: "Krok 4",
      title: "Monitoring i rekonwalescencja",
      description: "Po zakończeniu głównego etapu leczenia prowadzimy regularne wizyty kontrolne i dostosowujemy program terapeutyczny do postępów i potrzeb pacjenta.",
      details: ["Wizyty kontrolne", "Ocena postępów", "Modyfikacja terapii", "Wsparcie psychologiczne"]
    }
  ]

  return (
    <section
      ref={sectionRef}
      id="rehabilitacja"
      className="relative py-32 md:py-48 overflow-hidden"
    >
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-12 lg:gap-20">
          {/* Section Label */}
          <div className="lg:col-span-2">
            <div
              className="flex items-center gap-4 lg:sticky lg:top-32"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">(03)</span>
              <div className="w-8 h-px bg-border" />
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Rehabilitacja</span>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-10">
            {/* Section Header */}
            <div className="mb-20 md:mb-32 max-w-3xl">
              <h2
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.01em] text-foreground mb-8 text-pretty"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(40px)",
                  transitionProperty: "all",
                  transitionDuration: "0.8s",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "0.1s"
                }}
              >
                Cztery etapy powrotu do pelnej sprawnosci
              </h2>
              <p
                className="text-lg text-muted-foreground leading-relaxed"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transitionProperty: "all",
                  transitionDuration: "0.8s",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "0.2s"
                }}
              >
                Nasz program rehabilitacji jest projektowany indywidualnie dla kazdego pacjenta — lacząc specjalistyczna wiedze medyczna z nowoczesnymi metodami terapeutycznymi i stala opieka multidyscyplinarnego zespolu.
              </p>
            </div>

            {/* Rehab Image */}
            <div
              className="relative aspect-[16/9] mb-20 md:mb-32 overflow-hidden"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transitionProperty: "all",
                transitionDuration: "0.8s",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: "0.25s"
              }}
            >
              <ImageReveal
                src="/images/rehab.jpg"
                alt="Nowoczesna sala rehabilitacji w Grand Medical Clinic"
                className="object-cover"
                sizes="(max-width: 1400px) 100vw, 1400px"
                delay={250}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>

            {/* Steps Accordion */}
            <div className="space-y-0">
              {steps.map((step, index) => (
                <div
                  key={step.label}
                  className="group border-t border-border"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(30px)",
                    transitionProperty: "all",
                    transitionDuration: "0.8s",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: `${0.3 + index * 0.1}s`
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveStep(activeStep === index ? -1 : index)}
                    className="w-full py-8 md:py-12 text-left"
                    aria-expanded={activeStep === index}
                  >
                    <div className="grid md:grid-cols-12 gap-4 md:gap-8 items-start">
                      <div className="md:col-span-3 flex items-center gap-4">
                        <span className="font-mono text-xs tracking-wider text-muted-foreground">
                          0{index + 1}
                        </span>
                        <span className="font-serif text-xl md:text-2xl text-foreground group-hover:text-accent transition-colors duration-300">
                          {step.label}
                        </span>
                      </div>
                      <div className="md:col-span-6">
                        <h3 className="text-lg md:text-xl text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                          {step.title}
                        </h3>
                      </div>
                      <div className="md:col-span-3 flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {step.timing}
                        </span>
                        <div className="w-6 h-6 flex items-center justify-center">
                          <span
                            className="text-lg text-muted-foreground transition-transform duration-300"
                            style={{ transform: activeStep === index ? "rotate(45deg)" : "rotate(0)" }}
                          >
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  <div
                    className="overflow-hidden transition-all duration-500 ease-out"
                    style={{
                      maxHeight: activeStep === index ? "400px" : "0",
                      opacity: activeStep === index ? 1 : 0
                    }}
                  >
                    <div className="pb-12 md:pb-16 grid md:grid-cols-12 gap-8">
                      <div className="md:col-span-3" />
                      <div className="md:col-span-6 space-y-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                        <ul className="grid grid-cols-2 gap-3">
                          {step.details.map((detail) => (
                            <li key={detail} className="flex items-center gap-2 text-sm text-foreground/70">
                              <span className="w-1 h-1 bg-accent" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="border-t border-border" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

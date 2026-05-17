"use client"

import React from "react"
import { useEffect, useRef, useState } from "react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    specialty: "",
    message: ""
  })
  const [submitted, setSubmitted] = useState(false)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      ref={sectionRef}
      id="kontakt"
      className="relative py-32 md:py-48 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.02]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="contactGrid" width="5" height="5" patternUnits="userSpaceOnUse">
              <circle cx="0.5" cy="0.5" r="0.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contactGrid)" />
        </svg>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Section Label */}
          <div className="lg:col-span-2">
            <div
              className="flex items-center gap-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">(05)</span>
              <div className="w-8 h-px bg-border" />
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Kontakt</span>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left Column - Text */}
              <div className="space-y-8">
                <h2
                  className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.01em] text-foreground text-pretty"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(40px)",
                    transitionProperty: "all",
                    transitionDuration: "0.8s",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: "0.1s"
                  }}
                >
                  Umow wizyte lub skontaktuj sie z nami
                </h2>

                <p
                  className="text-lg text-muted-foreground leading-relaxed max-w-md"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(30px)",
                    transitionProperty: "all",
                    transitionDuration: "0.8s",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: "0.2s"
                  }}
                >
                  Nasz zespol jest gotowy, aby pomoc Ci w wyborze odpowiedniej specjalizacji i umowieniu wizyty u odpowiedniego specjalisty.
                </p>

                {/* Contact Info */}
                <div
                  className="space-y-6 pt-8"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transitionProperty: "all",
                    transitionDuration: "0.8s",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: "0.3s"
                  }}
                >
                  <div className="space-y-1">
                    <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Adres</span>
                    <p className="text-foreground">
                      Grand Medical Clinic<br />
                      ul. Brzezińska 5/15<br />
                      92-103 Łódź
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">E-mail</span>
                    <p className="text-foreground">
                      <a href="mailto:kontakt@grandmedical.pl" className="hover:text-accent transition-colors duration-300">
                        kontakt@grandmedical.pl
                      </a>
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Rejestracja</span>
                    <p className="text-foreground">
                      <a href="tel:+48422081080" className="hover:text-accent transition-colors duration-300">
                        +48 42 208 10 80
                      </a>
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Godziny przyjec</span>
                    <p className="text-foreground">
                      Poniedzialek – Piatek<br />
                      08:00 – 20:00<br />
                      <span className="text-muted-foreground text-sm">Szpital czynny całą dobe</span>
                    </p>
                  </div>
                </div>

                {/* NFZ Note */}
                <div
                  className="p-6 bg-secondary border-l-2 border-accent"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transitionProperty: "all",
                    transitionDuration: "0.8s",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: "0.4s"
                  }}
                >
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Grand Medical Clinic realizuje swiadczenia zarowno komercyjnie, jak i w ramach umowy z NFZ — w tym Oddzial Rehabilitacji Neurologicznej.
                  </p>
                </div>
              </div>

              {/* Right Column - Form */}
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-8"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(40px)",
                    transitionProperty: "all",
                    transitionDuration: "0.8s",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: "0.3s"
                  }}
                >
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                        Imie i nazwisko
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-300"
                        placeholder="Jan Kowalski"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                        Adres e-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-300"
                        placeholder="jan@email.pl"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone & Date */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-300"
                        placeholder="+48 ___ ___ ___"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="date" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                        Preferowana data
                      </label>
                      <input
                        type="date"
                        id="date"
                        value={formState.date}
                        onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground focus:outline-none focus:border-foreground transition-colors duration-300"
                      />
                    </div>
                  </div>

                  {/* Specialty */}
                  <div className="space-y-2">
                    <label htmlFor="specialty" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      Poradnia / Specjalizacja
                    </label>
                    <select
                      id="specialty"
                      value={formState.specialty}
                      onChange={(e) => setFormState({ ...formState, specialty: e.target.value })}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground focus:outline-none focus:border-foreground transition-colors duration-300 cursor-pointer"
                      required
                    >
                      <option value="" disabled>Wybierz poradnie</option>
                      <option value="neurologia">Poradnia Neurologiczna</option>
                      <option value="neurochirurgia">Poradnia Neurochirurgiczna</option>
                      <option value="chirurgia">Poradnia Chirurgiczna</option>
                      <option value="ortopedia">Poradnia Ortopedyczna</option>
                      <option value="psychologia">Poradnia Psychologiczna</option>
                      <option value="bol">Poradnia Leczenia Bolu</option>
                      <option value="rehabilitacja">Poradnia Rehabilitacyjna</option>
                      <option value="inne">Inna / Nie wiem</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      Dodatkowe informacje (opcjonalnie)
                    </label>
                    <textarea
                      id="message"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      rows={4}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-300 resize-none"
                      placeholder="Opisz krotko swoj problem zdrowotny lub zadaj pytanie..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-4 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                    >
                      <span className="text-sm tracking-[0.15em] uppercase">Wyslij zapytanie</span>
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </form>
              ) : (
                <div
                  className="flex flex-col justify-center space-y-6 py-16"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 0.5s ease"
                  }}
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-accent">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground">
                    Dziekujemy za zapytanie
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-sm">
                    Skontaktujemy sie z Toba w ciagu jednego dnia roboczego, aby potwierdzic termin wizyty.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

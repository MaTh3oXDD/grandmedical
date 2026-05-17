"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

interface Service {
  title: string
  href: string
  description: string
}

interface DepartmentServicesProps {
  title: string
  services: Service[]
}

export function DepartmentServices({ title, services }: DepartmentServicesProps) {
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
        <div
          className="mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transitionProperty: "all",
            transitionDuration: "0.8s",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-accent" />
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Uslugi</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] text-foreground">
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group block p-8 border border-border hover:border-accent transition-all duration-500"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionProperty: "all",
                transitionDuration: "0.8s",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: `${0.1 + index * 0.1}s`,
              }}
            >
              <span className="font-mono text-xs text-accent mb-4 block">0{index + 1}</span>
              <h3 className="font-serif text-2xl font-light text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{service.description}</p>
              <span className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase text-foreground/60 group-hover:text-accent transition-colors duration-300">
                Dowiedz sie wiecej
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

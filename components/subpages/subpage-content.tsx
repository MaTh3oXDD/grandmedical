"use client"

import { useEffect, useRef, useState } from "react"

interface Section {
  title: string
  content: string
  bullets: string[]
}

interface SubpageContentProps {
  sections: Section[]
}

export function SubpageContent({ sections }: SubpageContentProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {sections.map((section, index) => (
            <div
              key={section.title}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transitionProperty: "all",
                transitionDuration: "0.8s",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: `${index * 0.15}s`,
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-accent" />
                <span className="font-mono text-xs text-accent">0{index + 1}</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-6">
                {section.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {section.content}
              </p>
              <ul className="space-y-3">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="w-4 h-px bg-accent mt-3 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

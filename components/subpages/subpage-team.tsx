"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface TeamMember {
  name: string
  role: string
  image: string
}

interface SubpageTeamProps {
  team: TeamMember[]
}

export function SubpageTeam({ team }: SubpageTeamProps) {
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        <div
          className="mb-12"
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
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">O nas</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-[-0.02em] text-foreground">
            Nasz zespol
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
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
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-lg font-light text-foreground mb-1">{member.name}</h3>
              <p className="text-xs tracking-[0.1em] uppercase text-accent">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface DepartmentHeroProps {
  title: string
  subtitle: string
  description: string
  image: string
  features: string[]
}

export function DepartmentHero({ title, subtitle, description, image, features }: DepartmentHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-[80vh] flex items-end bg-primary text-primary-foreground overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src={image} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[10%] top-0 w-px h-full bg-primary-foreground/5" />
        <div className="absolute right-[20%] top-0 w-px h-full bg-primary-foreground/5" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-24 pt-40">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <div
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(30px)",
              transitionProperty: "all",
              transitionDuration: "1s",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent" />
              <span className="text-xs tracking-[0.3em] uppercase text-primary-foreground/50">{subtitle}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-[-0.02em]">
              {title}
            </h1>

            <p className="mt-8 text-lg md:text-xl text-primary-foreground/70 max-w-xl leading-relaxed">
              {description}
            </p>

            <div className="flex items-center gap-4 flex-wrap mt-10">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm tracking-[0.1em] uppercase text-primary bg-primary-foreground hover:bg-primary-foreground/90 transition-all duration-300"
              >
                Umow wizyte
              </Link>
            </div>
          </div>

          {/* Features list */}
          <div
            className="space-y-4"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(20px)",
              transitionProperty: "all",
              transitionDuration: "1s",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: "0.3s",
            }}
          >
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-4 text-primary-foreground/60">
                <span className="w-6 h-px bg-accent" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

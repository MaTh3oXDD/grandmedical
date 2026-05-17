"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface Breadcrumb {
  label: string
  href?: string
}

interface SubpageHeroProps {
  breadcrumb: Breadcrumb[]
  title: string
  description: string
  image: string
}

export function SubpageHero({ breadcrumb, title, description, image }: SubpageHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-[60vh] flex items-end bg-primary text-primary-foreground overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src={image} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[10%] top-0 w-px h-full bg-primary-foreground/5" />
        <div className="absolute right-[20%] top-0 w-px h-full bg-primary-foreground/5" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-20 pt-40">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-primary-foreground/50 mb-8"
          style={{
            opacity: isLoaded ? 1 : 0,
            transitionProperty: "opacity",
            transitionDuration: "0.6s",
          }}
        >
          <Link href="/" className="hover:text-primary-foreground/80 transition-colors">Strona glowna</Link>
          {breadcrumb.map((item, index) => (
            <span key={item.label} className="flex items-center gap-2">
              <span>/</span>
              {item.href ? (
                <Link href={item.href} className="hover:text-primary-foreground/80 transition-colors">{item.label}</Link>
              ) : (
                <span className="text-primary-foreground/70">{item.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(30px)",
            transitionProperty: "all",
            transitionDuration: "1s",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] tracking-[-0.02em] max-w-3xl">
            {title}
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
            {description}
          </p>
          <div className="mt-8">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm tracking-[0.1em] uppercase text-primary bg-primary-foreground hover:bg-primary-foreground/90 transition-all duration-300"
            >
              Umow wizyte
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

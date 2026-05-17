"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Szpital", href: "/szpital" },
    { label: "Poradnie", href: "/przychodnia" },
    { label: "Żywienie dla zdrowia", href: "/zywienie" },
    { label: "Innowacje", href: "/innowacje" },
    { label: "e-rejestracja", href: "/e-rejestracja" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="relative group flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GMC-logo-granat-08-Z3PiCBXfPwct27A6lqIffG9iLL1djD.png"
              alt="Grand Medical Clinic"
              width={120}
              height={56}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative group text-sm tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm tracking-[0.1em] uppercase text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300"
            >
              <span>Kontakt</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Otwórz menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "w-6 h-px bg-foreground transition-all duration-300",
                  isMobileMenuOpen && "rotate-45 translate-y-[4px]"
                )}
              />
              <span
                className={cn(
                  "w-6 h-px bg-foreground transition-all duration-300",
                  isMobileMenuOpen && "-rotate-45 -translate-y-[3px]"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-background transition-all duration-500 ease-out",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{ top: "80px" }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 pb-20">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-serif tracking-[0.1em] text-foreground hover:text-accent transition-colors duration-300"
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: isMobileMenuOpen ? 1 : 0,
                transition: "all 0.5s ease-out"
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 px-8 py-4 text-sm tracking-[0.1em] uppercase text-primary-foreground bg-primary"
            style={{
              transitionDelay: isMobileMenuOpen ? `${navItems.length * 50}ms` : "0ms",
              transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: isMobileMenuOpen ? 1 : 0,
              transition: "all 0.5s ease-out"
            }}
          >
            Umow wizyte
          </Link>
        </nav>
      </div>
    </header>
  )
}

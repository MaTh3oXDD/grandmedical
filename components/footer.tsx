"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 md:py-24 border-t border-border">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Logo & Tagline */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GMC-logo-granat-08-Z3PiCBXfPwct27A6lqIffG9iLL1djD.png"
                alt="Grand Medical Clinic"
                width={140}
                height={65}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Specjalistyczne centrum medyczne w Lodzi laczace opieke szpitalna, rehabilitacje neurologiczna i poradnie specjalistyczne.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-accent" />
              <span>Przyjmujemy pacjentow NFZ i komercyjnych</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Klinika
            </h4>
            <nav className="space-y-4">
              {[
                { label: "O nas", href: "/o-nas" },
                { label: "Szpital", href: "/szpital" },
                { label: "Rehabilitacja", href: "/rehabilitacja" },
                { label: "Poradnie", href: "/przychodnia" },
                { label: "Kontakt", href: "/kontakt" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-foreground/70 hover:text-foreground transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Clinics list */}
          <div className="lg:col-span-3">
            <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Poradnie
            </h4>
            <nav className="space-y-4">
              {[
                "Neurologiczna",
                "Neurochirurgiczna",
                "Ortopedyczna",
                "Chirurgiczna",
                "Leczenia Bolu",
                "Rehabilitacyjna",
              ].map((item) => (
                <span
                  key={item}
                  className="block text-sm text-foreground/70"
                >
                  {item}
                </span>
              ))}
            </nav>
          </div>

          {/* Contact Quick */}
          <div className="lg:col-span-3">
            <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Dane kontaktowe
            </h4>
            <div className="space-y-4">
              <p className="text-sm text-foreground/70">
                ul. Brzezińska 5/15<br />
                92-103 Łódź
              </p>
              <p className="text-sm">
                <a
                  href="tel:+48422081080"
                  className="text-foreground hover:text-accent transition-colors duration-300"
                >
                  +48 42 208 10 80
                </a>
              </p>
              <p className="text-sm">
                <a
                  href="mailto:kontakt@grandmedical.pl"
                  className="text-foreground/70 hover:text-foreground transition-colors duration-300"
                >
                  kontakt@grandmedical.pl
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                Pon – Pt: 08:00 – 20:00<br />
                Szpital: 24h / 7 dni
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Grand Medical Clinic. Wszelkie prawa zastrzezone.
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-8">
            {[
              { name: "Polityka prywatnosci", url: "#" },
              { name: "RODO", url: "#" },
              { name: "Dostepnosc", url: "#" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-xs tracking-[0.05em] text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <span>Do góry</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

        {/* Large Decorative Text */}
        <div className="mt-16 md:mt-24 overflow-hidden">
          <p className="font-serif text-[8vw] md:text-[6vw] lg:text-[5vw] font-light tracking-[-0.02em] text-foreground/[0.03] leading-none whitespace-nowrap">
            Zdrowie, komfort i skuteczny powrot do sprawnosci.
          </p>
        </div>
      </div>
    </footer>
  )
}

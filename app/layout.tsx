import React from "react"
import type { Metadata } from 'next'
import { DM_Sans, Cormorant_Garamond, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600', '700']
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700']
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains',
  weight: ['400', '500']
});

export const metadata: Metadata = {
  title: 'Grand Medical Clinic — Specjalistyczne Centrum Medyczne w Lodzi',
  description: 'Grand Medical Clinic to specjalistyczne centrum medyczne w Lodzi laczace opieke szpitalna, rehabilitacje i poradnie specjalistyczne. Kompleksowe leczenie, indywidualne podejscie i nowoczesna diagnostyka.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className="bg-background">
      <body className={`${dmSans.variable} ${cormorant.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

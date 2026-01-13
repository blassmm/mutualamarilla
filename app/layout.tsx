import type React from "react"
import type { Metadata } from "next"
import { GoogleTagManager } from "@next/third-parties/google"
import "./globals.css"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "AMAT - Mutual Amarilla de Trabajadores",
  description: "Mutual con sede central en la ciudad de La Plata y con alcance en toda la Provincia de Buenos Aires",
  icons: {
    icon: "/icons/logo-favicon.ico",
    shortcut: "/icons/logo-favicon.ico",
    // apple: "/icons/logo-favicon.ico",
  },
  // manifest: "/manifest.json",
  // themeColor: "#E8E53E",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
      <body>
        <Header />
        <div className="pt-16 sm:pt-20">{children}</div>
      </body>
    </html>
  )
}


import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AMAT - Mutual Amarilla de Trabajadores",
  description: "Mutual con sede central en la ciudad de La Plata y con alcance en toda la Provincia de Buenos Aires",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  )
}


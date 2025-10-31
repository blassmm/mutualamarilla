"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <div className="relative h-16 w-16">
            <Image
              src="/images/logoHeader.png"
              alt="AMAT - Mutual Amarilla de Trabajadores"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium uppercase tracking-wide transition-colors ${
              isActive("/") ? "text-[#F4ED4E]" : "text-gray-600 hover:text-[#F4ED4E]"
            }`}
          >
            Inicio
          </Link>
          <Link
            href="/quienes-somos"
            className={`text-sm font-medium uppercase tracking-wide transition-colors ${
              isActive("/quienes-somos") ? "text-[#F4ED4E]" : "text-gray-600 hover:text-[#F4ED4E]"
            }`}
          >
            Quienes Somos
          </Link>
          <Link
            href="/servicios"
            className={`text-sm font-medium uppercase tracking-wide transition-colors ${
              isActive("/servicios") ? "text-[#F4ED4E]" : "text-gray-600 hover:text-[#F4ED4E]"
            }`}
          >
            Servicios
          </Link>
          <Link
            href="/ayuda-economica"
            className={`text-sm font-medium uppercase tracking-wide transition-colors ${
              isActive("/ayuda-economica") ? "text-[#F4ED4E]" : "text-gray-600 hover:text-[#F4ED4E]"
            }`}
          >
            Ayuda Económica
          </Link>
          <Link
            href="/contacto"
            className={`text-sm font-medium uppercase tracking-wide transition-colors ${
              isActive("/contacto") ? "text-[#F4ED4E]" : "text-gray-600 hover:text-[#F4ED4E]"
            }`}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  )
}

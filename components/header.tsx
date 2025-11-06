"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import localFont from "next/font/local"

const abel = localFont({
  src: "../public/fonts/Abel-Regular.ttf",
  variable: "--font-abel",
})

export function Header() {
  const pathname = usePathname()
  const router = useRouter()

  const isActive = (path: string) => {
    return pathname === path
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80 // altura del header fijo
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (pathname === "/") {
      e.preventDefault()
      scrollToSection(sectionId)
    }
  }

  const handleInicioClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (pathname === "/") {
      window.location.href = "/"
    } else {
      router.push("/")
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm ${abel.variable}`}>
      <div className="mx-8 flex h-20 items-center justify-between ">
        <div>
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
        </div>
        <div>
          <nav className="flex items-center gap-8 font-abel">
            <Link
              href="/"
              onClick={handleInicioClick}
              className={` font-medium uppercase tracking-wide transition-colors ${
                isActive("/") ? "text-[#F4ED4E]" : "text-gray-600 hover:text-[#F4ED4E]"
              }`}
            >
              Inicio
            </Link>
            <Link
              href="/#quienes-somos"
              onClick={(e) => handleNavClick(e, "quienes-somos")}
              className={` font-medium uppercase tracking-wide transition-colors ${
                isActive("/quienes-somos") ? "text-[#F4ED4E]" : "text-gray-600 hover:text-[#F4ED4E]"
              }`}
            >
              Quienes Somos
            </Link>
            <Link
              href="/#servicios"
              onClick={(e) => handleNavClick(e, "servicios")}
              className={` font-medium uppercase tracking-wide transition-colors ${
                isActive("/servicios") ? "text-[#F4ED4E]" : "text-gray-600 hover:text-[#F4ED4E]"
              }`}
            >
              Servicios
            </Link>
            <Link
              href="/#ayuda-economica"
              onClick={(e) => handleNavClick(e, "ayuda-economica")}
              className={` font-medium uppercase tracking-wide transition-colors ${
                isActive("/ayuda-economica") ? "text-[#F4ED4E]" : "text-gray-600 hover:text-[#F4ED4E]"
              }`}
            >
              Ayuda Económica
            </Link>
            <Link
              href="/#contacto"
              onClick={(e) => handleNavClick(e, "contacto")}
              className={` font-medium uppercase tracking-wide transition-colors ${
                isActive("/contacto") ? "text-[#F4ED4E]" : "text-gray-600 hover:text-[#F4ED4E]"
              }`}
            >
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

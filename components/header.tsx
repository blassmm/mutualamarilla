"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import localFont from "next/font/local"

const abel = localFont({
  src: "../public/fonts/Abel-Regular.ttf",
  variable: "--font-abel",
})

export function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    return pathname === path
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = isScrolled ? 64 : 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (pathname === "/") {
      e.preventDefault()
      scrollToSection(sectionId)
    } else {
      router.push(`/#${sectionId}`)
      setIsMenuOpen(false)
    }
  }

  const handleInicioClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else {
      router.push("/")
    }
    setIsMenuOpen(false)
  }

  const handleAyudaClick = () => {
    router.push("/ayuda_economica")
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all duration-300 ${abel.variable} ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-4 md:mx-8 flex items-center justify-between">
        <div>
          <Link href="/" className="flex items-center">
            <div
              className={`relative transition-all duration-300 ${
                isScrolled ? "h-12 w-12" : "h-16 w-16"
              }`}
            >
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

        {/* Menú Desktop */}
        <nav className="hidden lg:flex items-center gap-8 font-abel">
          <Link
            href="/"
            onClick={handleInicioClick}
            className={` font-medium uppercase text-dark tracking-wide transition-colors ${
              isActive("/") ? "text-header" : "text-dark hover:text-header"
            }`}
          >
            Inicio
          </Link>
          <Link
            href="/#quienes-somos"
            onClick={(e) => handleNavClick(e, "quienes-somos")}
            className={` font-medium uppercase text-dark tracking-wide transition-colors ${
              pathname === "/" && "text-dark hover:text-header"
            }`}
          >
            Quienes Somos
          </Link>
          <Link
            href="/#servicios"
            onClick={(e) => handleNavClick(e, "servicios")}
            className={` font-medium uppercase text-dark tracking-wide transition-colors ${
              pathname === "/" && "text-dark hover:text-header"
            }`}
          >
            Servicios
          </Link>
          <Link
            href="/ayuda-economica"
            className={` font-medium uppercase tracking-wide transition-colors ${
              isActive("/ayuda-economica") ? "text-header" : "text-dark hover:text-header"
            }`}
          >
            Ayuda Económica
          </Link>
          <Link
            href="/#contacto"
            onClick={(e) => handleNavClick(e, "contacto")}
            className={` font-medium uppercase text-dark tracking-wide transition-colors ${
              pathname === "/" && "text-dark hover:text-header"
            }`}
          >
            Contacto
          </Link>
        </nav>

        {/* Botón Hamburguesa */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Menú Mobile */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col font-abel p-4">
          <Link
            href="/"
            onClick={handleInicioClick}
            className={`py-3 px-4 font-medium uppercase tracking-wide transition-colors ${
              isActive("/") ? "text-header" : "text-dark hover:bg-gray-50"
            }`}
          >
            Inicio
          </Link>
          <Link
            href="/#quienes-somos"
            onClick={(e) => handleNavClick(e, "quienes-somos")}
            className="py-3 px-4 font-medium uppercase tracking-wide text-dark hover:bg-gray-50 transition-colors"
          >
            Quienes Somos
          </Link>
          <Link
            href="/#servicios"
            onClick={(e) => handleNavClick(e, "servicios")}
            className="py-3 px-4 font-medium uppercase tracking-wide text-dark hover:bg-gray-50 transition-colors"
          >
            Servicios
          </Link>
          <Link
            href="/ayuda-economica"
            onClick={handleAyudaClick}
            className={`py-3 px-4 font-medium uppercase tracking-wide transition-colors ${
              isActive("/ayuda-economica") ? "text-header" : "text-dark hover:bg-gray-50"
            }`}
          >
            Ayuda Económica
          </Link>
          <Link
            href="/#contacto"
            onClick={(e) => handleNavClick(e, "contacto")}
            className="py-3 px-4 font-medium uppercase tracking-wide text-dark hover:bg-gray-50 transition-colors"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  )
}

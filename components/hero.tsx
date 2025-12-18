"use client"

import Image from "next/image"

export function Hero() {
  return (
    <section className="relative bg-white h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
      <div className="relative h-full w-full z-0"
        style={{
          clipPath: 'ellipse(100% 85% at 50% 0%)'
        }}>
        <Image
          src="/images/heroImg.webp"
          alt="Manos unidas en equipo"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 40%' }}
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-white/20 z-10 pointer-events-none" />
      </div>

      <div className="absolute left-1/2 -bottom-16 sm:-bottom-10 md:bottom-0 lg:bottom-6 -translate-x-1/2 z-20">
        <div className="relative h-[180px] w-[180px] sm:h-[240px] sm:w-[240px] md:h-[280px] md:w-[280px] lg:h-[320px] lg:w-[320px]">
          <Image
            src="/images/logoHero.webp"
            alt="AMAT - Mutual Amarilla de Trabajadores"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}
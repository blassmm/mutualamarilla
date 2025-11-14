"use client"

import Image from "next/image"

export function Hero() {
    return (
        <section className="relative bg-white h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden">
        <div className="relative h-full w-full z-0">
          <Image
            src="/images/ayuda-economica-banner.webp"
            alt="Manos unidas en equipo"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>
    )
}
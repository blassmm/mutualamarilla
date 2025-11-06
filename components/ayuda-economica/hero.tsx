"use client"

import Image from "next/image"

export function Hero() {
    return (
        <section className="relative bg-white h-[600px]">
        <div className="relative h-full w-full z-0">
          <Image
            src="/images/ayuda-economica-banner.jpg"
            alt="Manos unidas en equipo"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 40%' }}
            priority
          />
        </div>
      </section>
    )
}
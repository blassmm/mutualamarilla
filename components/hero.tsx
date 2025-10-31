"use client"

import Image from "next/image"

export function Hero() {
    return (
        <section className="relative bg-white h-[550px]">
        <div className="relative h-screen w-full z-0" 
             style={{
               clipPath: 'ellipse(100% 70% at 50% 0%)'
             }}>
          <Image
            src="/images/heroImg.jpg"
            alt="Manos unidas en equipo"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 40%' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 z-10 pointer-events-none" />
        </div>

        {/* Logo Circle Overlay */}
        <div className="absolute left-1/2 bottom-20 -translate-x-1/2 z-20">
          <div className="relative h-[300px] w-[300px]">
            <Image
              src="/images/logoHero.png"
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
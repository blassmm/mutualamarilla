import Image from "next/image"
import localFont from "next/font/local"

const abel = localFont({
  src: "../public/fonts/Abel-Regular.ttf",
  variable: "--font-abel",
})

const openSans = localFont({
  src: "../public/fonts/OpenSans-Regular.ttf",
  variable: "--font-open-sans",
})

export default function ContactoPage() {
  return (
    <main id="contacto">
      <section className="relative h-[160px] bg-white">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className={`text-3xl mt-16 font-bold text-dark ${abel.variable} font-abel`}>CONTACTO</h1>
        </div>
      </section>

      <section className="bg-white px-6">
        <div className="mx-auto max-w-6xl">
          <div className="bg-primary h-[420px] rounded-t-3xl p-12 relative overflow-hidden flex items-center">
            <div className="grid gap-12 lg:grid-cols-3 items-center w-full">
              <div className={`text-medium ${openSans.variable} font-open-sans`}>
                <p className="mb-8 leading-relaxed">
                  Nuestro equipo estará encantado de responder a tus consultas, brindarte información adicional y
                  asistirte en todo lo que necesites.
                </p>

                <div className="mb-8">
                  <h3 className="mb-3  font-bold uppercase">HORARIO DE ATENCIÓN:</h3>
                  <p className="">Lunes a viernes: 08:00 – 16:00</p>
                  <p className="">Sábados: 09:00 – 13:00</p>
                </div>
              </div>
              <div>
                <div className={`space-y-4 text-xl ${abel.variable} font-abel`}>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center">
                      <svg className="h-6 w-6" fill="black" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </div>
                    <p className="text-dark">221 4205203</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center">
                      <svg className="h-6 w-6" fill="black" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <p className="text-dark">consultas@mutualamarilla.com</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center">
                      <svg className="h-6 w-6" fill="black" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-dark">Calle 45 N°859, La Plata,</p>
                      <p className={`text-[16px] text-medium ${openSans.variable} font-open-sans`}>Buenos Aires, Argentina.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-[450px]">
                <Image 
                  src="/images/contactImg.png" 
                  alt="Contacto" 
                  fill 
                  className="object-contain object-bottom" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
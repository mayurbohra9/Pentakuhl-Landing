const certifications = [
  { name: 'IATA', image: '/images/certifications/iata.png' },
  { name: 'ISO 9001:2015', image: '/images/certifications/iso.png' },
  { name: 'MTO', image: '/images/certifications/mto.png' },
  { name: 'PharmaAero', image: '/images/certifications/pharma-aero.png' },
  { name: 'Indo-Italian Chamber', image: '/images/certifications/indo-italian.png' },
]

function MarqueeTrack() {
  return (
  <>
      {certifications.map((cert) => (
        <div
          key={cert.name}
          className="mx-3 flex h-36 w-36 shrink-0 items-center justify-center rounded-xl bg-white p-4 sm:h-44 sm:w-44 md:h-50 md:w-50"
        >
          <img src={cert.image} alt={cert.name} className="max-h-full max-w-full object-contain" />
        </div>
      ))}
    </>
  )
}

export default function Certifications() {
  return (
    <section className="overflow-hidden bg-penta-teal px-5 py-16 lg:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="m-0 text-3xl font-bold text-penta-orange lg:text-4xl">Certifications</h2>
        <p className="mt-4 text-base text-white/80">
          Certified excellence, ensuring compliance, quality, and global logistics reliability.
        </p>
      </div>

      <div className="relative mt-12 w-full overflow-hidden">
        <div className="flex w-max animate-marquee">
          <MarqueeTrack />
          <MarqueeTrack />
        </div>
      </div>
    </section>
  )
}

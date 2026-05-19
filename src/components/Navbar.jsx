import { useEffect, useState } from 'react'
import { IoChevronDown, IoClose } from 'react-icons/io5'
import { HiMenu } from 'react-icons/hi'

const servicesLinks = [
  'Air Freight',
  'Sea Freight',
  'Multi Modal Transport',
  'Project Cargo',
  'Custom Broking',
  'Transit Warehouse And Fleet',
]

const pentaLinks = [
  'Parcel Shippers',
  'Pallet Shippers'
]

const navLink =
  'text-sm font-bold uppercase tracking-[0.14em] text-neutral-700 transition-colors hover:text-penta-orange'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-[100] bg-white transition-shadow ${
          scrolled ? 'shadow-md' : 'shadow-[0_1px_0_rgba(0,0,0,0.06)]'
        }`}
      >
        <div className="mx-auto flex h-[var(--header-height)] max-w-[1400px] items-center justify-between px-5 lg:justify-center lg:px-8">

          {/* Mobile brand */}
          <a href="#home" className="text-lg leading-none lg:hidden">
            <span className="text-neutral-800">Penta</span>
            <span className="text-penta-kuhl">KÜHL</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Main">
            <a href="#home" className={`${navLink} text-penta-orange`}>
              HOME
            </a>
            <a href="#about" className={navLink}>
              ABOUT US
            </a>

            <div className="group relative">
              <a href="#services" className={`${navLink} inline-flex items-center gap-1`}>
                SERVICES
                <IoChevronDown className="h-2.5 w-2.5" />
              </a>
              <div className="pointer-events-none absolute top-full left-1/2 z-[110] min-w-[280px] -translate-x-1/2 pt-7 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
                <ul className="m-0 list-none rounded-xl border border-gray-100 bg-white p-5 shadow-xl">
                  {servicesLinks.map((item) => (
                    <li key={item}>
                      <a
                        href="#services"
                        className="block py-2 text-[15px] font-normal text-neutral-800 no-underline hover:text-penta-orange"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="group relative">
              <button
                type="button"
                className="inline-flex cursor-pointer items-center border-0 bg-transparent p-0 text-[19px] font-bold"
              >
                <span className="text-neutral-800">Penta</span>
                <span className="text-penta-kuhl">KÜHL</span>
                <IoChevronDown className="ml-1.5 h-3 w-3 text-neutral-800" />
              </button>
              <div className="pointer-events-none absolute top-full left-1/2 z-[110] min-w-[220px] -translate-x-1/2 pt-7 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
                <ul className="m-0 list-none rounded-xl border border-gray-100 bg-white p-6 shadow-xl">
                  {pentaLinks.map((item) => (
                   <li key={item}>
                      <a
                        href="#services"
                        className="block py-2 text-[15px] font-normal text-neutral-800 no-underline hover:text-penta-orange"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a href="#industries" className={navLink}>
              INDUSTRIES
            </a>
            <a href="#careers" className={navLink}>
              CAREERS
            </a>
            <a href="#footer" className={navLink}>
              CONTACT
            </a>
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border-0 bg-transparent p-0 lg:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <HiMenu className="h-7 w-7" />
          </button>
        </div>

        {mobileOpen && (
          <nav className="border-t border-gray-100 bg-white px-5 py-4 lg:hidden">
            <div className="mb-3 flex justify-end">
              <button
                type="button"
                className="border-0 bg-transparent p-1"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <IoClose className="h-7 w-7" />
              </button>
            </div>
            <ul className="m-0 flex list-none flex-col gap-4 p-0">
              <li>
                <a href="#home" className="text-sm font-bold text-penta-orange" onClick={() => setMobileOpen(false)}>
                  HOME
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm font-bold" onClick={() => setMobileOpen(false)}>
                  ABOUT US
                </a>
              </li>
              <li>
                <span className="text-sm font-bold">SERVICES</span>
                <ul className="mt-2 list-none space-y-2 pl-3">
                  {servicesLinks.map((s) => (
                    <li key={s}>
                      <a href="#services" className="text-sm text-neutral-600" onClick={() => setMobileOpen(false)}>
                        {s}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <span className="text-sm font-bold">
                  <span>Penta</span>
                  <span className="text-penta-kuhl">KÜHL</span>
                </span>
                <ul className="mt-2 list-none space-y-2 pl-3">
                  {pentaLinks.map((label) => (
                    <li key={label}>
                      <a href="#services" className="text-sm text-neutral-600" onClick={() => setMobileOpen(false)}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <a href="#industries" className="text-sm font-bold" onClick={() => setMobileOpen(false)}>
                  INDUSTRIES
                </a>
              </li>
              <li>
                <a href="#careers" className="text-sm font-bold" onClick={() => setMobileOpen(false)}>
                  CAREERS
                </a>
              </li>
              <li>
                <a href="#footer" className="text-sm font-bold" onClick={() => setMobileOpen(false)}>
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  )
}

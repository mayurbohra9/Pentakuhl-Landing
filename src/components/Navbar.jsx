import { useEffect, useState } from 'react'
import { IoChevronDown, IoChevronForward, IoClose } from 'react-icons/io5'
import { HiMenu } from 'react-icons/hi'
import { indiaOffices } from '../data/siteContent'

const servicesLinks = [
  'Air Freight',
  'Sea Freight',
  'Multi Modal Transport',
  'Project Cargo',
  'Custom Broking',
  'Transit Warehouse And Fleet',
]

const pentaLinks = ['Parcel Shippers', 'Pallet Shippers']

const mumbaiOffice = indiaOffices[0]

const navLink =
  'text-sm font-bold uppercase tracking-[0.14em] text-neutral-700 transition-colors hover:text-penta-orange'

const contactBtnClass =
  'inline-flex items-center justify-center rounded-lg border-0 bg-penta-orange px-6 py-2.5 text-sm font-bold tracking-wide text-white no-underline transition-colors hover:bg-[#c94515]'

function MobileNavRow({ children, className = '' }) {
  return <li className={`border-b border-gray-200 ${className}`}>{children}</li>
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [pentaOpen, setPentaOpen] = useState(false)

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

  const closeMobile = () => {
    setMobileOpen(false)
    setServicesOpen(false)
    setPentaOpen(false)
  }

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-[100] bg-white transition-shadow ${
        scrolled ? 'shadow-md' : 'shadow-[0_1px_0_rgba(0,0,0,0.06)]'
      }`}
    >
      {/* Bar: mobile/tablet ≤1024px */}
      <div className="mx-auto flex h-[var(--header-height)] max-w-[1400px] items-center justify-between px-5 min-[1025px]:hidden">
        <a href="#footer" className={contactBtnClass} onClick={closeMobile}>
          Contact
        </a>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border-0 bg-transparent p-0"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
        >
          <HiMenu className="h-7 w-7 text-neutral-900" />
        </button>
      </div>

      {/* Bar: desktop ≥1025px */}
      <div className="mx-auto hidden h-[var(--header-height)] max-w-[1400px] items-center justify-center px-8 min-[1025px]:flex">
        <nav className="flex items-center gap-9" aria-label="Main">
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
      </div>

      {/* Full-screen mobile menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[110] flex flex-col bg-white min-[1025px]:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex h-[var(--header-height)] shrink-0 items-center justify-between border-b border-gray-100 px-5">
            <a href="#footer" className={contactBtnClass} onClick={closeMobile}>
              Contact
            </a>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center border-0 bg-transparent p-0"
              aria-label="Close menu"
              onClick={closeMobile}
            >
              <IoClose className="h-8 w-8 text-neutral-900" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5" aria-label="Mobile">
            <ul className="m-0 list-none p-0">
              <MobileNavRow>
                <a
                  href="#home"
                  className="flex py-4 text-sm font-bold tracking-[0.12em] text-penta-orange no-underline uppercase"
                  onClick={closeMobile}
                >
                  HOME
                </a>
              </MobileNavRow>

              <MobileNavRow>
                <a
                  href="#about"
                  className="flex py-4 text-sm font-bold tracking-[0.12em] text-neutral-900 no-underline uppercase"
                  onClick={closeMobile}
                >
                  ABOUT US
                </a>
              </MobileNavRow>

              <MobileNavRow>
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between border-0 bg-transparent py-4 text-sm font-bold tracking-[0.12em] text-neutral-900 uppercase"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((open) => !open)}
                >
                  SERVICES
                  <IoChevronForward
                    className={`h-4 w-4 shrink-0 text-neutral-900 transition-transform ${servicesOpen ? 'rotate-90' : ''}`}
                  />
                </button>
                {servicesOpen && (
                  <ul className="m-0 list-none border-t border-gray-100 pb-3 pl-0">
                    {servicesLinks.map((item) => (
                      <li key={item}>
                        <a
                          href="#services"
                          className="block py-2.5 text-sm text-neutral-600 no-underline hover:text-penta-orange"
                          onClick={closeMobile}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </MobileNavRow>

              <MobileNavRow>
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between border-0 bg-transparent py-4 text-[17px] font-bold"
                  aria-expanded={pentaOpen}
                  onClick={() => setPentaOpen((open) => !open)}
                >
                  <span>
                    <span className="text-neutral-500">Penta</span>
                    <span className="text-penta-kuhl">KÜHL</span>
                  </span>
                  <IoChevronForward
                    className={`h-4 w-4 shrink-0 text-neutral-900 transition-transform ${pentaOpen ? 'rotate-90' : ''}`}
                  />
                </button>
                {pentaOpen && (
                  <ul className="m-0 list-none border-t border-gray-100 pb-3 pl-0">
                    {pentaLinks.map((label) => (
                      <li key={label}>
                        <a
                          href="#services"
                          className="block py-2.5 text-sm text-neutral-600 no-underline hover:text-penta-orange"
                          onClick={closeMobile}
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </MobileNavRow>

              <MobileNavRow>
                <a
                  href="#industries"
                  className="flex py-4 text-sm font-bold tracking-[0.12em] text-neutral-900 no-underline uppercase"
                  onClick={closeMobile}
                >
                  INDUSTRIES
                </a>
              </MobileNavRow>

              <MobileNavRow>
                <a
                  href="#careers"
                  className="flex py-4 text-sm font-bold tracking-[0.12em] text-neutral-900 no-underline uppercase"
                  onClick={closeMobile}
                >
                  CAREERS
                </a>
              </MobileNavRow>

              <MobileNavRow className="border-b-0">
                <a
                  href="#footer"
                  className="flex py-4 text-sm font-bold tracking-[0.12em] text-neutral-900 no-underline uppercase"
                  onClick={closeMobile}
                >
                  CONTACT
                </a>
              </MobileNavRow>
            </ul>

            <div className="mt-10 pb-10">
              <h3 className="m-0 text-base font-bold text-neutral-900">Contact Info</h3>
              <a
                href={`tel:${mumbaiOffice.phone.replace(/\s/g, '')}`}
                className="mt-3 block text-sm text-neutral-900 underline"
              >
                {mumbaiOffice.phone}
              </a>
              <a
                href="#footer"
                className="mt-2 block text-sm leading-relaxed text-neutral-900 underline"
                onClick={closeMobile}
              >
                {mumbaiOffice.address}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

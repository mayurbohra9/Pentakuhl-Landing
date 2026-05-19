import Logo from '../assets/logo.png'

export default function StickyLogoStrip() {
  return (
    <aside
      className="fixed top-1/2 left-0 z-50 hidden w-[35px] -translate-y-1/2 flex-col shadow-[2px_0_8px_rgba(0,0,0,0.15)] min-[1025px]:flex"
      aria-hidden
    >
      <img src={Logo} alt="Penta Freight Logo" />
    </aside>
  )
}

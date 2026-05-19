import { useRef, useState } from 'react'
import { HiVolumeOff, HiVolumeUp } from 'react-icons/hi'
import ScrollDownButton from './ui/ScrollDownButton'

export default function Hero() {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)
  const [hovered, setHovered] = useState(false)

  const toggleMute = () => {
    if (!videoRef.current) return
    const next = !muted
    videoRef.current.muted = next
    setMuted(next)
  }

  const scrollToAbout = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="group relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-poster.jpg"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/35" aria-hidden />

      <ScrollDownButton onClick={scrollToAbout} className="bottom-0" />

      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? 'Unmute video' : 'Mute video'}
        className={`absolute right-4 bottom-20 z-10 flex h-11 w-11 items-center justify-center rounded-full border-0 bg-penta-orange text-white shadow-lg transition-opacity duration-300 max-[1024px]:opacity-100 max-[1024px]:pointer-events-auto sm:right-6 sm:bottom-6 ${
          hovered ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        {muted ? <HiVolumeOff className="h-5 w-5" /> : <HiVolumeUp className="h-5 w-5" />}
      </button>
    </section>
  )
}

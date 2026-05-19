/** Thin white arc + chevron at bottom of hero (image 1) */
export default function ScrollDownButton({ onClick, className = '' }) {
  const size = 250

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Scroll down"
      className={`group absolute left-1/2 z-10 -translate-x-1/2 cursor-pointer border-0 bg-transparent p-0 ${className}`}
    >
      <span
        className="relative flex items-end justify-center overflow-hidden max-lg:h-[38px] max-lg:w-[76px]"
        style={{ width: size, height: size / 2 }}
      >
        <span
          className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full border border-white max-lg:h-[76px] max-lg:w-[76px]"
          style={{ width: size, height: size }}
          aria-hidden
        />
        <svg
          className="relative z-[1] mb-8 animate-bounce"
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          aria-hidden
        >
          <path
            d="M1 1.5L7 6.5L13 1.5"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  )
}

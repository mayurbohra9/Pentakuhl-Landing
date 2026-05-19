/** Pill label with dot — matches design (e.g. • Why us) */
export default function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-black" aria-hidden />
      <span className="rounded-full border border-gray-300 bg-white px-5 py-1.5 text-sm font-medium text-neutral-900">
        {children}
      </span>
    </div>
  )
}

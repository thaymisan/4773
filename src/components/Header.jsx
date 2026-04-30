import { MONTHS, OFFICE_DAYS, DAYS } from '../data/config'

export default function Header({ year, month, weekAnchors, onJump }) {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 px-5 pt-8 pb-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">
            {MONTHS[month - 1]}
          </h1>
          <p className="text-sm text-gray-400 dark:text-gray-500 font-medium mt-1">
            {year} · Ella, Thay & Spencer
          </p>
        </div>
        <div className="flex flex-col items-end gap-1 pt-1">
          <span className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 tracking-wide">
            ⚡ Office: Tue / Wed / Thu
          </span>
          <span className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 tracking-wide">
            📱 Recipes at 7pm
          </span>
        </div>
      </div>

      {/* Week jump nav */}
      <nav className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {weekAnchors.map((anchor) => (
          <button
            key={anchor.id}
            onClick={() => onJump(anchor.id)}
            className="flex-shrink-0 text-[11px] font-medium text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-700 rounded-full px-3 py-1 hover:text-gray-900 dark:hover:text-white hover:border-gray-900 dark:hover:border-gray-400 transition-all"
          >
            {anchor.label}
          </button>
        ))}
      </nav>
    </header>
  )
}

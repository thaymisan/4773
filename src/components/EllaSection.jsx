export default function EllaSection({ ella }) {
  if (!ella) return null
  return (
    <div>
      <p className="text-[9px] font-bold tracking-widest uppercase text-gray-300 dark:text-gray-600 mb-2">
        Ella's Day
      </p>
      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl px-4 py-3 space-y-1.5">
        {ella.lunch && (
          <div className="flex gap-3 text-xs text-gray-800 dark:text-gray-200 leading-relaxed">
            <span className="text-[9px] font-bold tracking-widest uppercase text-gray-300 dark:text-gray-600 min-w-[44px] pt-px flex-shrink-0">
              Lunch
            </span>
            {ella.lunch}
          </div>
        )}
        {ella.snack && (
          <div className="flex gap-3 text-xs text-gray-800 dark:text-gray-200 leading-relaxed">
            <span className="text-[9px] font-bold tracking-widest uppercase text-gray-300 dark:text-gray-600 min-w-[44px] pt-px flex-shrink-0">
              Snack
            </span>
            {ella.snack}
          </div>
        )}
      </div>
    </div>
  )
}

function formatTime(iso) {
  if (!iso) return 'All day'
  const d = new Date(iso)
  let h = d.getHours()
  const m = d.getMinutes()
  const ampm = h >= 12 ? 'pm' : 'am'
  h = h % 12 || 12
  return m === 0 ? `${h}${ampm}` : `${h}:${String(m).padStart(2,'0')}${ampm}`
}

export default function EventsSection({ events }) {
  if (!events || events.length === 0) return null
  return (
    <div>
      <p className="text-[9px] font-bold tracking-widest uppercase text-gray-300 dark:text-gray-600 mb-2">
        Events
      </p>
      <div className="space-y-2">
        {events.map((ev) => {
          const time = formatTime(ev.start.dateTime)
          const location = ev.location?.split(',')[0]
          return (
            <div key={ev.id} className="bg-gray-50 dark:bg-gray-900 rounded-xl px-4 py-3 flex items-start gap-3">
              <span className="text-[10px] font-bold text-gray-300 dark:text-gray-600 min-w-[36px] flex-shrink-0 pt-px tracking-wide">
                {time}
              </span>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">
                  {ev.summary}
                </p>
                {location && (
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">📍 {location}</p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

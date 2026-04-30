import { useState } from 'react'
import Tag from './Tag'
import EllaSection from './EllaSection'
import RecipeSection from './RecipeSection'
import EventsSection from './EventsSection'
import { DAYS, OFFICE_DAYS } from '../data/config'

export default function DayCard({ date, meal = {}, gcalEvents = [], isToday }) {
  const [open, setOpen] = useState(false)

  const dow        = date.getDay()
  const dayNum     = date.getDate()
  const isOffice   = OFFICE_DAYS.includes(dow)
  const hasContent = meal.ella || meal.recipe || gcalEvents.length > 0

  return (
    <div
      className={`border-b border-gray-100 dark:border-gray-800 ${isOffice ? 'border-l-2 border-l-gray-900 dark:border-l-white' : ''}`}
      id={`d${dayNum}`}
    >
      {/* ── COLLAPSED ROW ── */}
      <button
        onClick={() => hasContent && setOpen(o => !o)}
        className="w-full flex items-center gap-4 px-5 py-4 text-left"
      >
        {/* Date block */}
        <div className="min-w-[44px]">
          <div
            className={`text-3xl font-bold leading-none tracking-tight ${
              isToday
                ? 'underline underline-offset-4 text-gray-900 dark:text-white'
                : 'text-gray-900 dark:text-white'
            }`}
          >
            {dayNum}
          </div>
          <div className="text-[10px] font-medium text-gray-300 dark:text-gray-600 uppercase tracking-wide mt-0.5">
            {DAYS[dow]}
          </div>
        </div>

        {/* Meal + tags */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug mb-1.5">
            {meal.title || '—'}
          </p>
          <div className="flex flex-wrap gap-1">
            {isOffice && <Tag variant="office">Office</Tag>}
            {gcalEvents.map(ev => (
              <Tag key={ev.id} variant="appt">{ev.summary}</Tag>
            ))}
            {meal.newFood && <Tag variant="new">✨ New for Ella</Tag>}
          </div>
        </div>

        {/* Chevron */}
        {hasContent && (
          <span
            className={`text-gray-300 dark:text-gray-600 text-xs ml-1 flex-shrink-0 transition-transform duration-200 ${
              open ? 'rotate-180' : ''
            }`}
          >
            ▾
          </span>
        )}
      </button>

      {/* ── EXPANDED ── */}
      {open && (
        <div className="px-5 pb-5 border-t border-gray-100 dark:border-gray-800">
          <div className="pt-4 flex flex-col gap-4">
            <EventsSection events={gcalEvents} />
            <EllaSection ella={meal.ella} />
            <RecipeSection recipe={meal.recipe} />
          </div>
        </div>
      )}
    </div>
  )
}

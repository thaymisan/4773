import { useRef } from 'react'
import Header from './components/Header'
import WeekSection from './components/WeekSection'
import Footer from './components/Footer'
import { useCalendarEvents } from './hooks/useCalendarEvents'
import { MEALS } from './data/meals'

function pad(n) { return String(n).padStart(2, '0') }
function dateKey(y, m, d) { return `${y}-${pad(m)}-${pad(d)}` }

// Build week groups for a given month
function buildWeeks(year, month) {
  const daysInMonth = new Date(year, month, 0).getDate()
  const weeks = []
  let currentWeek = null

  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month - 1, d)
    const dow  = date.getDay() // 0=Sun

    if (dow === 0 || d === 1) {
      currentWeek = { days: [] }
      weeks.push(currentWeek)
    }

    currentWeek.days.push({
      date,
      key: dateKey(year, month, d),
    })
  }

  return weeks
}

export default function App() {
  const now   = new Date()
  const year  = now.getFullYear()
  const month = now.getMonth() + 1
  const today = now

  const { events, loading, error } = useCalendarEvents(year, month)
  const mainRef = useRef(null)

  const weeks = buildWeeks(year, month)

  // Week nav anchors
  const weekAnchors = weeks.map((w, i) => ({
    id: `week-${i + 1}`,
    label: `May ${w.days[0].date.getDate()}`,
  }))

  function jumpTo(id) {
    const el = document.getElementById(id)
    if (!el) return
    const headerHeight = 110 // approx sticky header height
    const top = el.getBoundingClientRect().top + window.scrollY - headerHeight
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <div className="max-w-xl mx-auto min-h-screen" id="top">
      <Header
        year={year}
        month={month}
        weekAnchors={weekAnchors}
        onJump={jumpTo}
      />

      <main ref={mainRef}>
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <div className="w-6 h-6 rounded-full border-2 border-gray-200 dark:border-gray-700 border-t-gray-900 dark:border-t-white animate-spin" />
            <p className="text-sm text-gray-400 dark:text-gray-500 font-medium">Loading your calendar...</p>
          </div>
        )}

        {error && (
          <div className="px-5 py-10 text-center text-sm text-gray-400 dark:text-gray-500">
            Couldn't load calendar events.
            <br />
            <span className="text-xs text-gray-300 dark:text-gray-600">{error}</span>
          </div>
        )}

        {!loading && weeks.map((week, i) => (
          <WeekSection
            key={i}
            id={`week-${i + 1}`}
            weekNum={i + 1}
            days={week.days}
            meals={MEALS}
            gcalEventsByDay={events}
            today={today}
          />
        ))}
      </main>

      <Footer />
    </div>
  )
}

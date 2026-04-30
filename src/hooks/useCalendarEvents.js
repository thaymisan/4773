import { useState, useEffect } from 'react'
import { CALENDAR_ID, API_KEY } from '../data/config'

function pad(n) { return String(n).padStart(2, '0') }

export function useCalendarEvents(year, month) {
  const [events, setEvents] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchEvents() {
      setLoading(true)
      setError(null)
      try {
        const start = new Date(year, month - 1, 1).toISOString()
        const end   = new Date(year, month, 1).toISOString()
        const url   = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?key=${API_KEY}&timeMin=${start}&timeMax=${end}&singleEvents=true&orderBy=startTime&maxResults=100`
        const res   = await fetch(url)
        if (!res.ok) throw new Error(`Calendar API error: ${res.status}`)
        const data  = await res.json()

        // Group events by YYYY-MM-DD
        const byDay = {}
        for (const ev of data.items || []) {
          const dateStr = (ev.start.dateTime || ev.start.date).slice(0, 10)
          if (!byDay[dateStr]) byDay[dateStr] = []
          // Filter out noise like water plants reminders
          if (!ev.summary?.toLowerCase().includes('water plants')) {
            byDay[dateStr].push(ev)
          }
        }
        setEvents(byDay)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [year, month])

  return { events, loading, error }
}

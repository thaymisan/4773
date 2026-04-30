import DayCard from './DayCard'

export default function WeekSection({ id, weekNum, days, meals, gcalEventsByDay, today }) {
  return (
    <section id={id}>
      <p className="px-5 pt-6 pb-2 text-[10px] font-semibold text-gray-300 dark:text-gray-600 uppercase tracking-widest">
        Week {weekNum}
      </p>
      {days.map(({ date, key }) => (
        <DayCard
          key={key}
          date={date}
          meal={meals[key] || {}}
          gcalEvents={gcalEventsByDay[key] || []}
          isToday={
            today.getFullYear() === date.getFullYear() &&
            today.getMonth() === date.getMonth() &&
            today.getDate() === date.getDate()
          }
        />
      ))}
    </section>
  )
}

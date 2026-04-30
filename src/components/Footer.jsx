const sections = [
  {
    title: 'Office Day Routine',
    items: ['⏰ Wake 5am', '🍼 Clean Alec\'s bottles', '🍽️ Empty dishwasher', '🥪 Prep Ella\'s lunch + snack', '🚶 Walk Ella to daycare', '🏠 Spencer takes over', '💼 Head to Fubo'],
  },
  {
    title: 'Meal Notes',
    items: ['Thay = pescatarian', '⚡ = Fast meal, 20–30 min', '✨ = New food for Ella', 'No spicy for Ella'],
  },
  {
    title: "Ella's Snack Rotation",
    items: ['Tangerine + pão de queijo', 'Banana pancake + strawberries', 'Pretzels + fruit'],
  },
  {
    title: 'Reminders',
    items: ['🎁 Gift reminder: 5 days before birthdays', '🌿 Spencer waters plants every Sunday'],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 px-5 py-8 mt-4">
      <div className="grid grid-cols-2 gap-7 max-w-xl">
        {sections.map((s) => (
          <div key={s.title}>
            <h4 className="text-[9px] font-bold tracking-widest uppercase text-gray-300 dark:text-gray-600 mb-2.5">
              {s.title}
            </h4>
            <ul className="space-y-1">
              {s.items.map((item) => (
                <li key={item} className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <a
        href="#top"
        className="block text-center text-[10px] font-semibold text-gray-300 dark:text-gray-600 uppercase tracking-widest mt-10"
      >
        ↑ Top
      </a>
    </footer>
  )
}

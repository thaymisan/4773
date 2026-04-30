const variants = {
  default: 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400',
  appt:    'bg-gray-900 dark:bg-white text-white dark:text-gray-900',
  office:  'bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500',
  muted:   'bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-500',
  new:     'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400',
}

export default function Tag({ children, variant = 'default' }) {
  return (
    <span className={`inline-flex text-[10px] font-medium px-2.5 py-0.5 rounded-full whitespace-nowrap ${variants[variant]}`}>
      {children}
    </span>
  )
}

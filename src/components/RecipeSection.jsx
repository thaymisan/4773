export default function RecipeSection({ recipe }) {
  if (!recipe) return null
  return (
    <div>
      <p className="text-[9px] font-bold tracking-widest uppercase text-gray-300 dark:text-gray-600 mb-2">
        Dinner
      </p>
      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
        <div className="flex justify-between items-start gap-3 mb-3">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug tracking-tight">
            {recipe.name}
          </h3>
          <span className="text-[9px] font-semibold text-gray-400 dark:text-gray-500 bg-gray-200 dark:bg-gray-800 rounded-full px-2.5 py-1 whitespace-nowrap flex-shrink-0">
            {recipe.time}
          </span>
        </div>

        <p className="text-[9px] font-bold tracking-widest uppercase text-gray-300 dark:text-gray-600 mb-1">
          Ingredients
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
          {recipe.ingredients}
        </p>

        <p className="text-[9px] font-bold tracking-widest uppercase text-gray-300 dark:text-gray-600 mb-1">
          Steps
        </p>
        <ol className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed space-y-1 pl-4 list-decimal">
          {recipe.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>

        {recipe.tip && (
          <p className="text-[11px] text-gray-400 dark:text-gray-500 italic mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
            {recipe.tip}
          </p>
        )}
      </div>
    </div>
  )
}

# 4773 · Family Calendar

A live family calendar for Ella, Thay & Spencer — built with React, Tailwind CSS, and the Google Calendar API. Automatically shows this month's meal plan, Ella's daycare lunch and snack, dinner recipes, and live events pulled from Google Calendar.

🔗 **Live site:** [thaymisan.github.io/4773](https://thaymisan.github.io/4773)

---

## What it does

- 📅 Pulls live events from Google Calendar automatically
- 🍽️ Shows a full monthly meal plan with dinner recipes
- 🧒 Shows Ella's daily lunch and snack
- ⚡ Highlights office days (Tue / Wed / Thu)
- 🌙 Dark and light mode — follows your system preference
- 📱 Mobile-first, works great on any device

---

## Tech stack

- [React](https://react.dev) — UI components
- [Vite](https://vitejs.dev) — build tool
- [Tailwind CSS](https://tailwindcss.com) — styling
- [Google Calendar API](https://developers.google.com/calendar) — live events
- [GitHub Actions](https://github.com/features/actions) — auto deploy on every push

---

## Project structure

```
src/
├── components/
│   ├── DayCard.jsx        ← main reusable day component
│   ├── EllaSection.jsx    ← Ella's lunch + snack
│   ├── EventsSection.jsx  ← live Google Calendar events
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── RecipeSection.jsx  ← dinner recipe
│   ├── Tag.jsx            ← pill tags
│   └── WeekSection.jsx
├── data/
│   ├── config.js          ← API key, calendar ID, office days
│   └── meals.js           ← monthly meal plan data ← UPDATE THIS MONTHLY
├── hooks/
│   └── useCalendarEvents.js  ← fetches from Google Calendar
├── App.jsx
├── main.jsx
└── index.css
```

---

## How to update each month

This is the only file you need to touch: **`src/data/meals.js`**

Each entry looks like this:

```js
'2026-05-01': {
  title: 'Sheet Pan Lemon Herb Salmon + Rice',
  office: true, // ← add this if it's a Tue/Wed/Thu
  newFood: true, // ← add this if it's a new food for Ella
  ella: {
    lunch: 'Pasta with red sauce + cucumber',
    snack: 'Tangerine slices + pão de queijo',
  },
  recipe: {
    name: 'Sheet Pan Lemon Herb Salmon + Rice',
    time: '25 min',
    ingredients: '2 salmon fillets · olive oil · lemon · garlic · oregano · rice',
    steps: [
      'Preheat oven 400°F.',
      'Season salmon, bake 12–15 min.',
      'Serve over microwave rice.',
    ],
    tip: '💡 Microwave rice pouches save time on busy days!',
  },
},
```

### Monthly update steps

1. Open `src/data/meals.js` on GitHub (or in Cursor)
2. Update the dates and meal content for the new month
3. Update the month in `src/App.jsx`:
   ```js
   const year  = 2026
   const month = 6  // ← change this to the new month number
   ```
4. Commit changes → GitHub Actions auto-deploys in ~2 min ✅

> 💡 You get a reminder on the **28th of every month** to do this!

---

## Ella's snack rotation

When the daycare menu has **applesauce** or **hummus/whole wheat crackers**, substitute with:

| Rotation | Snack |
|----------|-------|
| 1st | Tangerine slices + pão de queijo |
| 2nd | Banana pancake + strawberries |
| 3rd | Pretzels + fruit |

---

## Meal notes

- 🐟 Thay is **pescatarian** — no meat in her meals
- ⚡ Office day meals = 20–30 min max
- ✨ New foods for Ella marked with sparkle
- 🚫 No spicy food for Ella

---

## Running locally (for previewing changes)

```bash
# Install dependencies (first time only)
npm install

# Start local dev server
npm run dev
```

Open [http://localhost:5173/4773/](http://localhost:5173/4773/)

> Note: Google Calendar events won't show locally because the API key is restricted to the live domain. Everything else (meals, recipes, snacks) will work fine.

---

## Deployment

Deployment is fully automatic via GitHub Actions. Every time you push to `main`, the site rebuilds and deploys to GitHub Pages within ~2 minutes. No manual steps needed.

---

## Built with help from Claude 🤖

This project was designed and built in collaboration with [Claude](https://claude.ai) by Anthropic.

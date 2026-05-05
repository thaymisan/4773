// ─────────────────────────────────────────────────────────────
// MEAL PLAN DATA
// To update for a new month:
//   1. Change the keys to the new month's dates (YYYY-MM-DD)
//   2. Update title, ella (lunch + snack), and recipe for each day
//   3. Push to GitHub — the site rebuilds automatically
// ─────────────────────────────────────────────────────────────

export const MEALS = {
  '2026-05-01': {
    title: 'Sheet Pan Lemon Herb Salmon + Rice',
    ella: { lunch: 'Pasta with red sauce + cucumber', snack: 'Tangerine slices + pão de queijo' },
    recipe: { name: 'Sheet Pan Lemon Herb Salmon + Rice', time: '25 min', ingredients: '2 salmon fillets · 1 lemon sliced · 2 garlic cloves · olive oil · dried oregano · salt & pepper · microwave rice pouches', steps: ['Preheat oven 400°F.', 'Place salmon on lined pan, drizzle olive oil, top with garlic, lemon, oregano, salt & pepper.', 'Bake 12–15 min until flaky. Microwave rice. Serve together.'], tip: '💡 Microwave rice pouches save time on a busy day!' },
  },
  '2026-05-02': {
    title: 'Baked Teriyaki Salmon Bowls',
    recipe: { name: 'Baked Teriyaki Salmon Bowls', time: '30 min', ingredients: '2–3 salmon fillets · 3 tbsp soy sauce · 1 tbsp honey · 1 tsp sesame oil · 1 garlic clove · rice · broccoli or edamame · sesame seeds', steps: ['Mix soy sauce, honey, sesame oil, garlic. Coat salmon, sit 10 min.', 'Bake at 400°F for 15 min. Serve over rice with veggies.'], tip: '💡 Ella loves salmon — always a crowd pleaser!' },
  },
  '2026-05-03': {
    title: 'Orzo Pasta + Banana Pancakes + Boiled Eggs',
    recipe: { name: 'Orzo Pasta + Banana Pancakes + Boiled Eggs', time: '20 min', ingredients: 'orzo · olive oil · salt · parmesan · bananas · eggs · flour · milk', steps: ['Cook orzo in salted water, drain, toss with olive oil + parmesan.', 'Mash banana with egg + a splash of milk + flour. Cook small pancakes on non-stick pan.', 'Boil eggs 8 min for hard boiled.'], tip: '💡 Sometimes simple is perfect! 🥲' },
  },
  '2026-05-04': {
    title: 'One-Pan Baked Fish Tacos',
    ella: { lunch: 'Turkey roll-ups + cucumber', snack: 'Banana pancake + strawberries' },
    recipe: { name: 'One-Pan Baked Fish Tacos', time: '25 min', ingredients: 'cod or tilapia · taco seasoning · olive oil · flour tortillas · shredded cabbage · sour cream · lime · avocado', steps: ['Preheat oven 400°F. Coat fish in olive oil + taco seasoning. Bake 15 min.', 'Flake into tortillas, top with cabbage, sour cream, lime, avocado.'], tip: "💡 Ella's portion: fish + sour cream, keep it simple." },
  },
  '2026-05-05': {
    title: '⚡ Baked Ziti with Red Sauce',
    office: true,
    ella: { lunch: 'Mac & cheese + peas', snack: 'Cheese cubes w/ crackers' },
    recipe: { name: 'Baked Ziti with Red Sauce', time: '40 min', ingredients: '1 lb ziti · 1 jar marinara · 1 cup ricotta · 1.5 cups mozzarella · parmesan · salt · fresh basil', steps: ['Cook pasta al dente, drain. Mix with marinara and ricotta.', 'Pour into baking dish, top with mozzarella + parmesan. Bake 375°F 20 min.', 'Top with fresh basil.'], tip: "💡 Make a big batch — leftovers are great for Ella's lunch!" },
  },
  '2026-05-06': {
    title: '⚡ Sheet Pan Shrimp Fajitas',
    office: true,
    ella: { lunch: 'Hummus wrap + berries', snack: 'Fruit cups' },
    recipe: { name: 'Sheet Pan Shrimp Fajitas', time: '20 min', ingredients: '1 lb shrimp · 2 bell peppers sliced · 1 onion sliced · fajita seasoning · olive oil · flour tortillas · sour cream · lime', steps: ['Preheat oven 425°F. Toss shrimp, peppers, onion in olive oil + seasoning on sheet pan.', 'Bake 12–15 min. Serve in warm tortillas with sour cream and lime.'], tip: '💡 Ella can have hers as a simple rice bowl.' },
  },
  '2026-05-07': {
    title: '⚡ Baked Salmon + Lemon Orzo',
    office: true,
    ella: { lunch: 'Quesadilla + apple slices', snack: 'Pretzels + fruit' },
    recipe: { name: 'Baked Salmon + Lemon Orzo', time: '25 min', ingredients: 'salmon fillets · olive oil · lemon · garlic powder · salt · 1 cup orzo · veg broth · spinach · parmesan', steps: ['Bake salmon at 400°F for 15 min with olive oil, lemon, garlic powder.', 'Cook orzo in broth 9 min, stir in spinach + parmesan. Serve salmon on top.'], tip: '💡 Orzo cooks faster than rice — great office night hack!' },
  },
  '2026-05-08': {
    title: 'One-Pan Baked Gnocchi + Tomato',
    newFood: true,
    ella: { lunch: 'Mini sandwiches + fruit', snack: 'Graham crackers' },
    recipe: { name: 'One-Pan Baked Gnocchi with Tomato & Mozzarella', time: '25 min', ingredients: '1 lb shelf-stable gnocchi · 1 can crushed tomatoes · 2 garlic cloves · olive oil · fresh mozzarella · basil · salt & pepper', steps: ['Preheat oven 425°F. Mix gnocchi, tomatoes, garlic, olive oil in oven-safe pan.', 'Bake 20 min. Top with mozzarella last 5 min. Finish with fresh basil.'], tip: '💡 No boiling needed — gnocchi cooks right in the sauce!' },
  },
  '2026-05-09': {
    title: 'Homemade Pizza Night 🍕',
    ella: { lunch: 'Pasta + butter + parmesan', snack: 'Graham crackers' },
    recipe: { name: 'Homemade Pizza Night', time: '30 min', ingredients: 'store-bought pizza dough · marinara · mozzarella · shrimp + veggies (Thay) · pepperoni or cheese (Spencer & Ella)', steps: ['Preheat oven 450°F. Roll dough, top with sauce, cheese, toppings.', 'Bake 12–15 min until crust golden. Rest 5 min before slicing.'], tip: '💡 Let Ella pick her toppings — makes her excited to eat!' },
  },
  '2026-05-10': {
    title: 'Baked Stuffed Salmon 🌸',
    recipe: { name: 'Baked Stuffed Salmon', time: '35 min', ingredients: '1 large salmon fillet · 4 oz cream cheese · 2 tbsp capers · fresh dill · lemon zest · garlic · olive oil · salt & pepper', steps: ['Preheat oven 375°F. Score salmon to create a pocket.', 'Mix cream cheese, capers, dill, lemon zest, garlic. Stuff into pocket.', 'Drizzle with olive oil, season. Bake 25 min.'], tip: '💡 You deserve a special meal today, Thay! 🌸' },
  },
  '2026-05-11': {
    title: 'Meal Prep: Lemon Cod + Baked Chicken',
    ella: { lunch: 'Rice cakes w/ sun butter', snack: 'Rice cakes w/ sun butter' },
    recipe: { name: 'Lemon Baked Cod (Thay & Ella) + Baked Chicken Thighs (Spencer)', time: '35 min', ingredients: 'cod fillets · chicken thighs · lemon · garlic · olive oil · paprika · Italian seasoning · salt & pepper', steps: ['Preheat oven 400°F. Season chicken — bake 35 min. Add cod last 15 min with lemon + Italian seasoning.', 'Serve with rice or roasted potatoes.'], tip: '💡 Both proteins cook together — minimal cleanup!' },
  },
  '2026-05-12': {
    title: '⚡ Baked Mac & Cheese + Garlic Shrimp',
    office: true,
    ella: { lunch: 'Pasta salad + grapes', snack: 'Tangerine slices + pão de queijo' },
    recipe: { name: 'Baked Mac & Cheese + Garlic Butter Shrimp', time: '40 min', ingredients: 'elbow pasta · butter · flour · milk · cheddar · gruyere · breadcrumbs · shrimp · garlic · lemon', steps: ['Make cheese sauce: melt butter, whisk flour, add milk, stir in cheeses.', 'Mix with pasta, top with breadcrumbs, bake 375°F 20 min.', 'Sauté shrimp in garlic butter + lemon 5 min on the side for adults.'], tip: '💡 Ella gets mac, adults get elevated. Celebrate! 🏫' },
  },
  '2026-05-13': {
    title: '⚡ Sheet Pan Honey Soy Salmon + Broccoli',
    office: true,
    ella: { lunch: 'Cheese + crackers + veggies', snack: 'Cheese cubes' },
    recipe: { name: 'Sheet Pan Honey Soy Salmon + Broccoli', time: '20 min', ingredients: 'salmon fillets · broccoli · olive oil · garlic powder · 2 tbsp soy sauce · 1 tbsp honey · sesame seeds · microwave rice', steps: ['Preheat oven 425°F. Broccoli in olive oil + garlic one side. Soy + honey glaze on salmon other side.', 'Bake 15 min. Serve over microwave rice.'], tip: "💡 Quick celebratory dinner after Ella's run! 🏃" },
  },
  '2026-05-14': {
    title: '⚡ Baked Pesto Pasta + Shrimp',
    office: true,
    ella: { lunch: 'Orzo salad + cherry tomatoes + olive oil', snack: 'Fruit cups' },
    recipe: { name: 'Baked Pesto Pasta + Shrimp', time: '25 min', ingredients: 'penne · jar of pesto · shrimp · cherry tomatoes · parmesan · olive oil', steps: ['Cook pasta, reserve ½ cup pasta water. Toss with pesto, shrimp, tomatoes + pasta water in oven-safe dish.', 'Bake 400°F 12 min. Top with parmesan.'], tip: "💡 Ella's portion: pesto + pasta only, no shrimp." },
  },
  '2026-05-15': {
    title: 'Baked Cod + Sweet Potato Wedges',
    ella: { lunch: 'Mini cheese tortellini + marinara dipping sauce', snack: 'Cheese cubes w/ crackers' },
    recipe: { name: 'Baked Cod + Sweet Potato Wedges', time: '30 min', ingredients: 'cod or tilapia · 2 sweet potatoes · olive oil · paprika · garlic powder · salt · lemon', steps: ['Preheat oven 425°F. Sweet potato wedges in olive oil + paprika, roast 25 min.', 'Add fish last 15 min with olive oil, garlic powder, lemon. Everything done at once!'], tip: '💡 One pan, minimal dishes.' },
  },
  '2026-05-16': {
    title: 'Baked Shrimp Tacos + Bean Rice Bowl (Ella) 🌮',
    ella: { lunch: 'Rice + black beans + corn + cheese' },
    recipe: { name: 'Baked Shrimp Tacos + Bean Rice Bowl', time: '25 min', ingredients: 'shrimp · taco seasoning · olive oil · flour tortillas · cabbage · avocado · sour cream · lime · black beans · rice · corn', steps: ['Preheat oven 425°F. Toss shrimp in olive oil + seasoning, bake 10–12 min.', 'Adults: build tacos. Ella: rice + black beans + corn + sour cream bowl.'], tip: '💡 Ella gets familiar flavors in a fun new format!' },
  },
  '2026-05-17': {
    title: 'Riverdale Block Party 🏘️',
    recipe: { name: 'Block Party Pasta Salad', time: '30 min', ingredients: 'rotini pasta · cherry tomatoes · olives · cucumber · bell pepper · Italian dressing · parmesan · pepperoni (skip for Thay)', steps: ['Cook pasta, cool completely. Toss with veggies and dressing. Chill 30 min.', 'Top with parmesan before serving.'], tip: '💡 Make double — it disappears fast!' },
  },
  '2026-05-18': {
    title: 'Baked Shakshuka + Pita',
    newFood: true,
    ella: { snack: 'Banana pancake + strawberries' },
    recipe: { name: 'Baked Shakshuka', time: '30 min', ingredients: '1 can crushed tomatoes · 1 can diced tomatoes · 1 onion · 3 garlic cloves · 1 bell pepper · cumin · paprika · 4 eggs · feta · olive oil · pita', steps: ['Sauté onion, pepper, garlic in olive oil 5 min. Add tomatoes + spices, simmer 10 min.', 'Transfer to oven-safe dish, crack eggs into wells. Bake 375°F 12 min.', 'Top with feta, serve with pita.'], tip: '💡 Eggs in tomato sauce — Ella might surprise you!' },
  },
  '2026-05-19': {
    title: '⚡ Baked White Sauce Pasta + Chicken (Spencer)',
    office: true,
    ella: { lunch: 'Pasta with pesto + peas', snack: 'Graham crackers' },
    recipe: { name: 'Baked Creamy White Sauce Pasta + Baked Chicken', time: '40 min', ingredients: 'penne · butter · garlic · heavy cream · parmesan · mozzarella · nutmeg · chicken breasts · Italian seasoning', steps: ['Season chicken with Italian seasoning + olive oil, bake 400°F 25 min.', 'White sauce: melt butter, sauté garlic, add cream + parmesan + nutmeg. Toss with pasta, top with mozzarella. Bake 375°F 15 min.'], tip: "💡 Ella's white sauce comfort meal — Spencer gets chicken on the side." },
  },
  '2026-05-20': {
    title: '⚡ Sheet Pan Honey Garlic Salmon + Green Beans',
    office: true,
    ella: { lunch: 'Mini salmon cakes + steamed broccoli', snack: 'Rice cakes w/ sun butter' },
    recipe: { name: 'Sheet Pan Honey Garlic Salmon + Green Beans', time: '20 min', ingredients: 'salmon fillets · green beans · 3 tbsp honey · 2 tbsp soy sauce · 3 garlic cloves minced · olive oil · sesame seeds', steps: ['Preheat oven 400°F. Whisk honey, soy sauce, garlic. Place salmon + green beans on pan, drizzle glaze.', 'Bake 15–18 min. Sprinkle sesame seeds.'], tip: '💡 10 min prep, 15 min oven. Perfect office night!' },
  },
  '2026-05-21': {
    title: '⚡ Baked Rice with Shrimp + Tomatoes',
    office: true,
    ella: { lunch: 'Tuna + rice crackers + cucumber', snack: 'Pretzels + fruit' },
    recipe: { name: 'Baked Rice with Shrimp & Tomatoes', time: '35 min', ingredients: '1.5 cups long grain rice · shrimp · 1 can diced tomatoes · chicken broth · garlic · olive oil · paprika · parsley', steps: ['Preheat oven 375°F. Sauté garlic 1 min in oven-safe pot. Add rice, tomatoes, broth, paprika. Cover, bake 25 min.', 'Add shrimp on top last 8 min. Finish with parsley.'], tip: '💡 One pot, everything bakes together — almost zero cleanup!' },
  },
  '2026-05-22': {
    title: 'Tuna Puttanesca (Thay) + Buttered Pasta (Ella)',
    ella: { lunch: 'Fish stick wrap in tortilla + fruit', snack: 'Cheese cubes w/ crackers' },
    recipe: { name: 'Tuna Puttanesca + Buttered Pasta (Ella)', time: '20 min', ingredients: 'spaghetti · 2 cans tuna in olive oil · 1 can crushed tomatoes · olives · capers · garlic · olive oil · parsley · butter + parmesan (Ella)', steps: ["Cook pasta. Pull out Ella's portion, toss with butter + parmesan.", 'Sauté garlic, add tomatoes, olives, capers 10 min. Stir in tuna. Serve adults.'], tip: '💡 Two meals in one pan — 20 min total!' },
  },
  '2026-05-23': {
    title: 'Sushi Night (Order In) + Miso Soup 🍣',
    ella: { lunch: 'Yogurt + granola + fruit', snack: 'Cheese cubes w/ crackers' },
    recipe: { name: 'Order In + Quick Miso Soup', time: '10 min', ingredients: 'miso paste · tofu cubed · green onions · nori · hot water', steps: ['Dissolve 1 tbsp miso in 2 cups hot (not boiling) water. Add tofu, green onions, nori.'], tip: '💡 Everyone deserves a break. No guilt!' },
  },
  '2026-05-24': {
    title: 'Baked Mediterranean Branzino + Mezze 🐟',
    newFood: true,
    recipe: { name: 'Baked Mediterranean Branzino + Mezze Board', time: '30 min', ingredients: 'whole branzino or fillets · lemon · rosemary + thyme · garlic · olive oil · cherry tomatoes · hummus · pita · olives · cucumber', steps: ['Preheat oven 400°F. Score fish, stuff with lemon + herbs. Drizzle olive oil, surround with cherry tomatoes. Bake 20–25 min.', 'Serve with mezze board on the side.'], tip: '💡 Branzino is mild + flaky — very similar to what Ella already loves!' },
  },
  '2026-05-25': {
    title: 'Memorial Day BBQ 🇺🇸',
    ella: { snack: 'Fruit cups' },
    recipe: { name: 'Shrimp Skewers + Grilled Corn + Potato Salad', time: '30 min', ingredients: 'large shrimp · olive oil · garlic · lemon · paprika · corn on the cob · butter · potatoes · mayo · mustard · celery · green onion', steps: ['Marinate shrimp in olive oil, garlic, lemon, paprika 15 min. Thread on skewers, grill or bake 400°F 10 min.', 'Boil corn, finish with butter. Potato salad: boil, cool, mix with mayo + mustard + celery.'], tip: '💡 Spencer can handle the grill!' },
  },
  '2026-05-26': {
    title: '⚡ Leftover Rice Bowl Remix',
    office: true,
    ella: { lunch: 'Pizza roll-up: tortilla + marinara + mozzarella', snack: 'Tangerine slices + pão de queijo' },
    recipe: { name: 'Leftover Rice Bowl Remix', time: '15 min', ingredients: 'leftover rice · protein from fridge · soy sauce · sesame oil · fried egg (adults) · avocado · cucumber · any veggies', steps: ['Reheat rice. Top with protein, avocado, cucumber. Drizzle soy + sesame oil. Fry an egg for adults.'], tip: '💡 Post-holiday no-cook night — just assembling!' },
  },
  '2026-05-27': {
    title: '⚡ Baked Salmon Patties + Rice',
    office: true,
    ella: { lunch: 'English muffin mini pizza + fruit', snack: 'Graham crackers' },
    recipe: { name: 'Baked Salmon Patties + Lemon Rice', time: '25 min', ingredients: '2 cans salmon · breadcrumbs · egg · garlic powder · lemon zest · dill · olive oil spray · microwave rice · lemon', steps: ['Mix salmon, breadcrumbs, egg, garlic powder, lemon zest, dill. Form patties on lined pan. Spray with olive oil.', 'Bake 400°F 15 min, flip halfway. Serve with microwave rice + lemon.'], tip: '💡 Ella will love these — like fancy fish sticks!' },
  },
  '2026-05-28': {
    title: '⚡ Quick Shrimp Fried Rice',
    office: true,
    ella: { lunch: 'Cheese quesadilla + guac + fruit', snack: 'Rice cakes w/ sun butter' },
    recipe: { name: 'Quick Shrimp Fried Rice', time: '20 min', ingredients: '2 cups day-old rice · shrimp · 2 eggs · frozen peas + carrots · soy sauce · sesame oil · garlic · green onions', steps: ['Cook shrimp in hot pan 3 min, set aside. Scramble eggs, push to side.', 'Add rice, veggies, garlic — stir fry 5 min. Add soy + sesame oil, return shrimp. Top with green onions.'], tip: '💡 Use leftover or day-old rice for best results!' },
  },
  '2026-05-29': {
    title: 'One-Pan Baked Pasta e Fagioli',
    ella: { lunch: 'Mini meatballs + pasta + red sauce (thermos)', snack: 'Banana pancake + strawberries' },
    recipe: { name: 'One-Pan Baked Pasta e Fagioli', time: '30 min', ingredients: 'ditalini or elbow pasta · 1 can cannellini beans · 1 can crushed tomatoes · chicken or veg broth · garlic · rosemary · olive oil · parmesan', steps: ['Preheat oven 375°F. Sauté garlic 1 min in oven-safe pot. Add tomatoes, beans, broth, pasta, rosemary. Cover and bake 25 min.', 'Stir, top with parmesan. Done!'], tip: '💡 Italian comfort food, all in one pot!' },
  },
  '2026-05-30': {
    title: 'Build-Your-Own Ramen Bar Night 🎉',
    ella: { lunch: 'Cheese cubes + crackers + fruit' },
    recipe: { name: 'Build-Your-Own Ramen Bar', time: '30 min', ingredients: 'ramen noodles · chicken or veg broth · miso paste · soy sauce · sesame oil · soft boiled eggs · shrimp or fish cake (Thay) · tofu · corn · green onions · nori', steps: ['Soft boil eggs: 7 min, ice bath, peel. Make broth with miso, soy, sesame oil. Cook noodles separately.', 'Set up toppings bar — let everyone build their own bowl!'], tip: '💡 Let Ella pick her own toppings — great way to try new things!' },
  },
  '2026-05-31': {
    title: 'Baked Herb Fish + Sheet Pan Roasted Vegetables',
    recipe: { name: 'Baked Herb Fish + Sheet Pan Roasted Vegetables', time: '30 min', ingredients: 'white fish fillets · zucchini · bell peppers · cherry tomatoes · garlic · olive oil · Italian herbs · lemon · salt & pepper', steps: ['Preheat oven 400°F. Veggies on sheet pan with olive oil + garlic + herbs. Roast 15 min.', 'Add fish on top, drizzle lemon + olive oil. Bake another 15 min.'], tip: '💡 Last dinner of May — easy, healthy, delicious. What a month! 🎉' },
  },
}

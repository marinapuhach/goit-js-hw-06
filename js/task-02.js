const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientEl = document.querySelector('#ingredients');
let ingredientElArr = ingredients.map((ingredient) => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = `${ingredient}`;
  ingredientEl.classList.add('item');
  return ingredientEl;
});
ingredientEl.append(...ingredientElArr);

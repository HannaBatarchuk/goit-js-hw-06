const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector(`#ingredients`);
console.log(listIngredients);
const markupIngredients = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");

listIngredients.innerHTML = markupIngredients;
console.log(markupIngredients);


// Напиши скрипт, который для каждого элемента массива ingredients:
// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.
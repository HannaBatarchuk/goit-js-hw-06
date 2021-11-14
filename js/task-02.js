const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const itemEl = ingredients.map((ingredient) => {
  const ingredientsElement = document.createElement("li");
  ingredientsElement.className = "item";
  ingredientsElement.textContent = ingredient;
  return ingredientsElement;
});
console.log(itemEl);
ingredientsList.append(...itemEl)


// const listOfIngredients = document.querySelector(`#ingredients`);
// console.log(listOfIngredients);
// const markupOfIngredients = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");

// listOfIngredients.innerHTML = markupOfIngredients;
// console.log(markupOfIngredients);


// Напиши скрипт, который для каждого элемента массива ingredients:
// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.
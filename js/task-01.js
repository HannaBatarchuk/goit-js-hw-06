
   
const category = document.querySelector('#categories');

const categoryEl = category.children;
console.log(`Number of categories:`, categoryEl.length);

const elements = category.querySelectorAll('.item')
elements.forEach((title) => {
    console.log(`Category:`, title.firstElementChild.textContent);
    console.log(`Elements:`, title.lastElementChild.childElementCount);
});

// Задание 1
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст 
// заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
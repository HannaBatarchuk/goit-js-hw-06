const widget = document.querySelector(".widget");
const widgetColorId = document.querySelector(".color");
const widgetButtonCahgeColor = document.querySelector("button");
const bodyBgColor = document.querySelector('body');


widgetButtonCahgeColor.addEventListener('click', onBtnChangeClick);

function onBtnChangeClick () {
  const onChangeBgColor = getRandomHexColor();
  bodyBgColor.style.backgroundColor = onChangeBgColor;
  widgetColorId.textContent = onChangeBgColor;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// Задание 9
// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике 
// на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
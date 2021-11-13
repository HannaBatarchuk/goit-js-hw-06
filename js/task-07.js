const inputEl = document.querySelector('input');
const textContent = document.querySelector('#text');


inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
    textContent.style.fontSize = event.currentTarget.value + 'px';
};


// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control 
// (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>
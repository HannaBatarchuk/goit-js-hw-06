const nameInput = document.querySelector('[id="name-input"]');
const nameOutput = document.querySelector('[id="name-output"]');

nameInput.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (nameInput.value === ``) {
        return nameOutput.textContent = `Anonymous`;
    } else {
        return nameOutput.textContent = event.currentTarget.value;   
    }
};

// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input 
// (событие input), подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
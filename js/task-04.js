let counterValue = 0;

const valueOfCounter = document.querySelector('#value');
const btnDecrementElement = document.querySelector('button[data-action="decrement"]');
const btnIncrementElement = document.querySelector('button[data-action="increment"]');

const onClickDecrement = () => {
    counterValue -= 1;
    valueOfCounter.textContent = counterValue;
};
const onClickIncrement = () => {
    counterValue += 1;
    valueOfCounter.textContent = counterValue;
};
btnDecrementElement.addEventListener('click', onClickDecrement);
btnIncrementElement.addEventListener('click', onClickIncrement);
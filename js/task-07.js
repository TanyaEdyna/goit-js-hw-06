const valueInputEl = document.querySelector('#font-size-control');
const textInputEl = document.querySelector('#text');
// console.log(typeof valueInputEl.value);

function handleTextStyleInput() {
    textInputEl.style.fontSize = `${valueInputEl.value}px`
};
valueInputEl.addEventListener('input', handleTextStyleInput);
// console.log(valueInputEl);
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)//генерує випадкове число від 0 до 16777214 і округлює його до цілого числа. 
    .toString(16)
    .padStart(6, 0)}`;
}
const btnChangeColor = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const spanColor = document.querySelector('.color');

const getColor = () => {
  bodyEl.style.backgroundColor = getRandomHexColor();//getRandomHexColor() - результат виклику функції
  spanColor.textContent = getRandomHexColor();
};
btnChangeColor.addEventListener('click', getColor);
// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

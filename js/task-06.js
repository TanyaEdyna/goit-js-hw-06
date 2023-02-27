const correctInputEl = document.querySelector('#validation-input');
const inputLength = Number(correctInputEl.dataset.length); //6
console.log(typeof inputLength);

function changeColorOfBorder() {
  if (correctInputEl.value.length === inputLength) {
    correctInputEl.classList.add('valid'); //valid = green
    correctInputEl.classList.remove('invalid');
  } else {
    correctInputEl.classList.add('invalid'); //invalid = red
    correctInputEl.classList.remove('valid');
  }
}

correctInputEl.addEventListener('blur', changeColorOfBorder);




// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.



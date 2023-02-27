const correctInputEl = document.querySelector('#validation-input');
     const inputLength = correctInputEl.dataset.length; //6
   
    function changeColorOfBorder() {
    if (correctInputEl.value.length !== inputLength) {
        correctInputEl.classList.add('invalid') //valid = green

    } else {
        correctInputEl.classList.remove('valid')
        correctInputEl.classList.add('invalid')//invalid = red
    }; 
}

correctInputEl.addEventListener('blur', changeColorOfBorder);
// classList -  для роботи з класами елемента

// const inputEl = document.querySelector('#validation-input');
// const data = Number(inputEl.dataset.length);

// function ghangeBorderColor() {
//   if (inputEl.value.length !== data) {
//     inputEl.classList.add('invalid');
//   }
//   if (inputEl.value.length === data) {
//     inputEl.classList.remove('invalid');
//     inputEl.classList.add('valid');
//   }
// }
// inputEl.addEventListener('blur', ghangeBorderColor);






// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.



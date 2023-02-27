const correctInputEl = document.querySelector('#validation-input');
 
correctInputEl.addEventListener('blur', () => {

    const inputLength = correctInputEl.dataset.length; //6
   

    if (inputLength >= 6) {
       correctInputEl.classList.add('valid') //valid = green
    } else {
       correctInputEl.classList.add('invalid')//invalid = red
    }; 
  
});




//classList -  для роботи з класами елемента








// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.



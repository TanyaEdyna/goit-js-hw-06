const textInputEl = document.querySelector('#name-input');
const userNameEl = document.querySelector('#name-output');

textInputEl.addEventListener('input', (event)=> {
    userNameEl.textContent = event.target.value ? event.target.value : 'Anonymous'});
//умова ? значення, якщо умова вірна : значення, якщо умова не вірна
//target - властивість об'єкта події event - містить посилання на елемент, який спричинив виникнення події.


// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
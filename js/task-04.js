const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const counterEl = document.querySelector('#value');//лічильник
console.log(counterEl);
let counterValue = 0;

decrementEl.addEventListener('click', () => {
    counterValue -=1;
counterEl.textContent = counterValue;

});
console.log(decrementEl);

incrementEl.addEventListener('click', ()=>{
    counterValue +=1;
    counterEl.textContent = counterValue;
})
console.log(incrementEl);



// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
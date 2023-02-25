const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelector('#ingredients');


const liEls = ingredients.map((el) => {//створюю  новий масив елементів li з вмістом з масиву ingredients

  const ingredientEl = document.createElement('li');
  ingredientEl.classList.add('item');
  // console.log(ingredientEl);
  
  ingredientEl.textContent = el;
  return ingredientEl;
});

ulEl.append(...liEls);
console.log(ulEl);



// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

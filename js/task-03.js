
const baseURL = 'https://images.pexels.com/photos/'
const images = [
  {
    url: `${baseURL}140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: `${baseURL}213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: `${baseURL}219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
    alt: 'Group of Horses Running',
  },
];
//1 варіант з методом map()
const refs = {
  imagesElements: document.querySelector('.gallery'),
};

const createElements = images.map(el => `<li>
<img src='${el.url}'
 alt ='${el.alt}'
 width = 300>
</li>`).join('');

console.log(createElements);

refs.imagesElements.insertAdjacentHTML('afterbegin', createElements);
console.log();

//2 варіант з циклом for...of
// const galleryEl = document.querySelector('.gallery');
// let items = "";

// for (let el of images) {
//   items += `
//   <li>
//   <img src='${el.url}'
//   alt ='${el.alt}'
//   width = 400>
//   </li>
//   `;
// }
// galleryEl.insertAdjacentHTML('beforeend', items);
// console.log(galleryEl);


// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.
// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
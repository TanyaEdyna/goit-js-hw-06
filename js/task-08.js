const refs = {
    formEl: document.querySelector('.login-form'),

}

refs.formEl.addEventListener('submit', (event)=>{
    // console.log(event);
    event.preventDefault();

    const{
    elements: {email, password},
} = event.currentTarget; //деструктурую об'єкт elements з форми, який містить всі поля форми, та витягую поля "email" та "password" як окремі змінні.
const inputValue = { //тут значення, які були введені користувачем у поля "email" та "password"
    email: `${email.value}`,
    password: `${password.value}`,
}
console.log(inputValue);

if(email.value === '' || password.value === '') {
    alert('All form field must be filled out');

};
refs.formEl.reset();
});

// console.log(refs.formEl);


// 1 Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// 2 Під час відправлення форми сторінка не повинна перезавантажуватися.
// 3 Якщо у формі є незаповнені поля, виводь alert з попередженням про те, 
// що всі поля повинні бути заповнені.
// 4 Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, 
// де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.
// 5 Для доступу до елементів форми використовуй властивість elements.
// // Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
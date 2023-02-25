
const itemEls = document.querySelectorAll('.item'); //отримала масив елементів
console.log('Number of categotie:', itemEls.length);

const bodyElements = document.body; //доступ до обєкта body
// const childNodes = bodyElements.childNodes;//childNodes має список всіх дітей і текстових вузлів
// console.log(childNodes);
    
// const bodyChildren = bodyElements.children;//доступ до всіх дочірніх елементів - по суті тільки тегів
// console.log(bodyChildren);

itemEls.forEach((el) => {
    // console.log(el);
    const titleEls = el.firstElementChild.textContent;
    console.log('Category: ', titleEls);
    const quantityEls = el.lastElementChild.children.length;
    console.log('Elements: ',quantityEls);
    

})

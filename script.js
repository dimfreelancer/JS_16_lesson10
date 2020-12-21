'use strict';
//Lesson10

//убираем рекламный баннер
const adv = document.querySelector('.adv');
adv.remove();


//меняем фон
// document.body.style.backgroundImage = 'url("image/you-dont-know-js.jpg")';

const book = document.querySelectorAll('.book');
console.log('book: ', book);

const books = document.querySelector('.books');
console.log('books: ', books);


// book[1].remove(); //можно и не удалять ;)

//выставим книги
books.prepend(book[1]);
books.append(book[3]);
books.append(book[5]);
books.append(book[2]);

//выставим главы
let mybook = book[5];
console.log('mybook: ', mybook);
let li = mybook.querySelectorAll('li');
console.log('li: ', li);

let ul = mybook.querySelector('ul');
ul.prepend(li[4]);
ul.prepend(li[3]);
ul.prepend(li[9]);
ul.append(li[5]);
ul.append(li[8]);
ul.append(li[10]);
ul.prepend(li[0]);
ul.prepend(li[1]);

// ul = '';
console.log('ul: ', ul);
// li = '';
console.log('li: ', li);


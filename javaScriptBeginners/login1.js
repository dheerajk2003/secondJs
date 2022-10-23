// single element 
// {
//     console.log(document.getElementById('box'));
//     const boxe = document.getElementById('box');
//     console.log(boxe);

//     console.log(document.querySelector('.userInput'));
// console.log(document.querySelector('input'));
// }

// multiple element;
// {
//     console.log(document.querySelectorAll('#box'));
//     console.log(document.getElementsByClassName('main'));
//     console.log(document.getElementsByTagName('input'));
// const items = document.querySelectorAll('.main');
// items.forEach((item) => console.log(item));
// }

//dom
// {
//     const ul = document.querySelector('.items');
// // this will remove ul.
// ul.remove();

// // this will remove the last item of ul.
// ul.lastElementChild.remove();

// // this will change the first item of ul to hello.
// ul.firstElementChild.textContent = "hello";

// ul.children[1].innerText = 'boom';
// ul.lastElementChild.innerHTML = 'kaboom';
// }

// css,dom
// {
//     const btn = document.querySelector('#submit');
//     btn.style.background = 'yellow';
// }

//events
// {
//     const btn = document.querySelector('#submit');
// btn.addEventListener('click', (e) => {
//     console.log('click');
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.className);
//     // console.log(e.target.id);
//     // const box = document.querySelector('#box');
//     // box.classList.add('mix');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>hat</h1>';
// });
// }

const myform = document.querySelector
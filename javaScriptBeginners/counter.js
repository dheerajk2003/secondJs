let count=0;
let decrease = document.querySelector('#btn1');
let reset = document.querySelector('#btn2');
let increase = document.querySelector('#btn3');
let number = document.querySelector('#number');

decrease.onclick = function decreases(){
    count--;
    number.innerHTML = count;
}
reset.onclick = function resets(){
    count=0;
    number.innerHTML = count;
}
increase.onclick = function increases(){
    count++;
    number.innerHTML = count;
}
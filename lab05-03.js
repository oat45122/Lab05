function onClick(){
    console.log('click');
    h1.textContent = 'GOOD NIGHT';
    t1.textContent = 'night';
    t2.classList.add('blue');
    t3.textContent = 'day';
    t4.textContent = 'day';
    body.classList.add('body2');
    button.removeEventListener('click',onClick);
    button.addEventListener('click',onClick2);
}
function onClick2(){
    console.log('click');
    h1.textContent = 'GOOD MORNING';
    t1.textContent = 'day';
    t2.classList.remove('blue');
    t2.classList.add('red');
    t3.textContent = 'night';
    t4.textContent = 'night';
    body.classList.remove('body2');
    button.addEventListener('click',onClick);
}


const button = document.querySelector("button");
const h1 = document.querySelector("h1");
const body = document.querySelector("body");
const t1 = document.getElementById("t1");
const t2 = document.getElementById("t2");
const t3 = document.getElementById("t3");
const t4 = document.getElementById("t4");

button.addEventListener('click',onClick);
function onClick(){
    console.log('click');
    p1.textContent = 'ooooooooooooooooooo';
    p2.textContent = 'ooooooooooooooooooo';
}
function onClick2(t){
    const a = t.currentTarget;
    alert(a.textContent+"    Hello World");
    a.style.backgroundColor = "gray";
}


const d1 = document.getElementById("d1");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const button = document.querySelectorAll("button").forEach(button => button.addEventListener('click',onClick2));
d1.addEventListener('click',onClick);

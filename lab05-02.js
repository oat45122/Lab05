function add(){
    console.log('click');
    var img = document.createElement("img");
    img.classList.add('img');
    img.src = "https://img.icons8.com/plasticine/2x/full-trash.png";
    const text = document.createTextNode(document.querySelector('input').value)
    var span = document.createElement("span")
    
    p = document.createElement("p");
    span.appendChild(text);
    p.appendChild(img);
    p.appendChild(span);
    document.body.appendChild(p);

    p.addEventListener('click',check);
    img.addEventListener('click',remove);
}
function remove(){
    var node = this.parentNode;
    node.parentNode.removeChild(node);
}
function check(Target){
    const s = Target.currentTarget;
    s.querySelector('span').innerHTML = '<s>'+s.querySelector('span').innerHTML+'</s>';
}


const input = document.querySelector("input");
const button = document.querySelector("button");
button.addEventListener('click',add);

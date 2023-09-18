// JS is a single thread synchronus language (default)

// manipulation: to change 92

// console.log(document.documentElement);

// console.log(document.body.firstElementChild);

// console.log(document.body.childNodes);

const arr = document.body.children;

const newArr = Array.from(arr);

// console.log(arr);
// console.log(newArr);

// for(let i=0; i<newArr.length; i++){
//     console.log(newArr[i]);
// }

// console.log(document.getElementById('co'));
// console.log(co);

// const thisOne = "hm";

// console.log(document.getElementById('thisOne'));

// const thisOneclass = document.getElementsByClassName("cont");
// console.log(thisOneclass[0]);

// const name = document.getElementsByName("email");
// console.log(name[0]);

// const tag = document.getElementsByTagName("span");
// console.log(tag);

// const tag = document.getElementsByTagName("span");
// console.log(tag[0]);

const tag = document.getElementsByTagName("span");

tag[0].innerHTML="<span class='myclass'>nice story</span>"
tag[0].style.backgroundColor = 'green'
tag[0].style.font = '100 1.5rem "Roboto"'

console.log(tag[0]);

const btn = document.getElementById('btn');
btn.style.backgroundColor = 'blue'
btn.style.color = 'white'
btn.style.border = '2px'
btn.style.padding = '2vmax 4vmax'
btn.style.cursor = 'pointer'

// const mom = document.querySelector('.btn');
// mom.innerText = 'none';

// console.log(btn.getAttribute('class'));

btn.setAttribute('class','thisIsButton');
console.log(btn.getAttribute('class'));

btn.onclick = bringme;

// h1.textContent = 'yoy'

function bringme() {
    const h1 = document.createElement('h1');
    document.body.prepend(h1);
    const myText = document.createTextNode('Sample Text');
    h1.append(myText);
}

const btns = document.querySelectorAll('button');
btns[1].style.backgroundColor = 'violet';
btns[1].onclick = deleteProgram;


function deleteProgram() {
    const h1 = document.querySelector('h1');
    h1.remove();
}


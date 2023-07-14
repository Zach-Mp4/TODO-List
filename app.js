const form = document.querySelector("form");
const ul = document.querySelector("ul");
const input = document.querySelector('#text')

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log("Submitted");
    const newLi = document.createElement("li");
    newLi.innerText = input.value;
    localStorage.setItem(newLi.innerText, newLi.innerText);
    ul.appendChild(newLi);
})

ul.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.style.textDecoration = "line-through";
    }
})
ul.addEventListener('dblclick', function(e){
    if(e.target.tagName === "LI"){
        localStorage.removeItem(e.target.innerText);
        e.target.remove();
    }
})
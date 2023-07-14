function print(){
    for (let i = 0; i < localStorage.length; i++){
        console.log(localStorage[i]);
    }
}

function print2(){
    let k = 0;
    for (let i in localStorage){
        if (k >= localStorage.length){
            break;
        }
        console.log(localStorage[i]);
        k++;
    }
}

let k = 0;
for (let i in localStorage){
    if (k >= localStorage.length){
        break;
    }
    const newLi = document.createElement("li");
    newLi.innerText = localStorage[i];
    ul.appendChild(newLi);
    k++;
}
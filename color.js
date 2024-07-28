let btn = document.querySelector("button");
btn.addEventListener("click",colorchange);

function colorchange(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red}, ${green}, ${blue})`;
    
    let box = document.querySelector("div");
    box.style.backgroundColor = color;

    let para = document.querySelector("h1");
    para.innerText = color;
    para.style.color = color;
}
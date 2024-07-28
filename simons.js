let gameSequence = [];
let userSequence = [];

let btn = ["one","two","three","four"];

let started  = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if (started == false) {
        console.log("game started");
        started = true;
        levelup();
        }
})

function levelup(){
    userSequence = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    let no = Math.floor(Math.random() * 4);
    let random = btn[no];
    let ranbtn = document.querySelector(`.${random}`);
    // console.log(random);    

    gameSequence.push(random);
    flash(ranbtn);
}

function check(idx){
    if (userSequence[idx] === gameSequence[idx]) {
        if (userSequence.length == gameSequence.length) {
            setTimeout(levelup,1000)
        }
    } else {
    h2.innerHTML = `<b>Game Over ! Your score was ${level}</b> <br> press any  key to restart!`;    
    reset();
    }
}

function flash(btn){
    btn.classList.add("flash");
    setTimeout( function(){
        btn.classList.remove("flash");
    }, 250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout( function(){
        btn.classList.remove("userflash");
    }, 250);
}

let btns = document.querySelectorAll(".btn");
for (const button of btns) {
    button.addEventListener("click",btnpress);
}
function btnpress(){
    // console.log(this)
    // let button = this;
    usercolor = this.getAttribute("id");
    userSequence.push(usercolor);
    userflash(this);
    check(userSequence.length-1);
}

function reset() {
    highscore();
    gameSequence = [];
    userSequence = [];
    level = 0;
    started = false;
}
let HIGH = 0;
let score = document.querySelector("#score");
function highscore() {
    if (HIGH < level) {
        HIGH = level;
        score.innerText = `HIGH SCORE : ${HIGH}`;
    }
    else{
        console.log("try again")
    }
}
let resetbtn = document.querySelector("#reset");
resetbtn.addEventListener("click",function(){
    HIGH = 0;
    score.innerText = `HIGH SCORE : ${HIGH}`;
})
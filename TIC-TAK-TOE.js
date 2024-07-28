let turn0 = true;
let count = 0;
let winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let btn = document.querySelectorAll(".box");

btn.forEach((btns) => {
    btns.addEventListener("click", () => {
        console.log(count);
        count++;
        if (turn0) {
            btns.innerText = "O";
            turn0 = false;
        } else {
            btns.innerText = "X";
            turn0 = true;
        }
        btns.disabled = true;
        if (count == 9) {
            para.innerText = `NO ONE WINS!`;
        }
        checkWinner();
    });
});
let para = document.querySelector("p");

function checkWinner() {
    for (const pattern of winpattern) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        let pos1val = btn[pattern[0]].innerText;
        let pos2val = btn[pattern[1]].innerText;
        let pos3val = btn[pattern[2]].innerText;
        // console.log(pos1val, pos2val, pos3val)
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                para.innerText = `${pos1val} WINS`;
                disablebox(btn);

            }
            
        }

    }
}

function disablebox(btn) {
    for (const box of btn) {
        box.disabled = true;
    }
}
function enablebox(btn) {
    for (const box of btn) {
        box.disabled = false;
        turn0 = true;
        box.innerText = "";
        para.innerText = "CLICK TO PLAY";
    }
}
let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    enablebox(btn);
    count = 0;
})



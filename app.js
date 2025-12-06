let boxes = document.getElementsByClassName('box');
let reset_btn = document.getElementById('btn');
let new_btn = document.querySelector('.new-btn');
let msg = document.getElementById('msg');
let msgContainer = document.querySelector('.msg-container');

let turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];



function showWinner(winner){
    msg.innerText = `Congratulate, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBox();
};

function resetGame(){
    turnO = true;
    msgContainer.classList.add('hide');
    enabledBox();
}


function disabledBox(){
    for(let box of boxes){
        box.disabled = true;
    }
}

function enabledBox(){
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}



function checkWinner() {
    for (const pattern of winPattern) {

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 === pos2 && pos2 ===pos3){
                console.log('Winner', pos1);
                showWinner(pos1);
            }
        }
    }
};

for (const box of boxes) {
    box.addEventListener('click', function () {
        if (turnO) {
            box.innerText = "X";
            turnO = false;
        }
        else {
            box.innerText = 'O';
            turnO = true;
        }
        box.disabled = true;
        console.log("button was clicked");
         checkWinner();
    })

};

reset_btn.addEventListener('click', resetGame);
new_btn.addEventListener('click', resetGame);

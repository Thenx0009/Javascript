let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgConatainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;// playerO,playerX

const winningResult = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const reset = () =>{
    turnO = true;
    count = 0;
    enableBoxes();
    msgConatainer.classList.add("hide");
};


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO==true){
            box.innerText = "O";
            box.style.color = "green";
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "red";
            turnO = true;
        }
        box.disabled=true;  
        count++;

        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            gameDraw();
        }
    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw`;
    msgConatainer.classList.remove("hide");
    disabledBoxes();
};

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled=true;
    }
}

const enableBoxes = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const checkWinner = () => {
    for (let pattern of winningResult) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val ){
                showWinner(pos1val);
                return true;
            }
        }  
    }
};

const showWinner = (Winner) => {
    msg.innerText = `Congratulations, Winner is ${Winner}`
    msgConatainer.classList.remove("hide");
    disabledBoxes();
}

newgamebtn.addEventListener("click",()=>{
    return reset();
})
resetBtn.addEventListener("click",()=>{
    return reset();
})
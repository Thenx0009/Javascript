let user_score = 0;
let comp_score = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


let msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const genCompchoice = () => {
    //rock,paper,scissor
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.trunc(Math.random()*3);
    return options[randomIdx];

}
const drawGame = () => {
    msg.innerText = "Game was Draw. Play again!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userchoice,compchoice) => {
    if(userWin){
        user_score++;
        userScorePara.innerText = user_score;
        msg.innerText = `you win! yours ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green"; 
    }
    else{
        comp_score++;
        compScorePara.innerText = comp_score;
        msg.innerText= `you lose! ${compchoice} beats yours ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) => {
     console.log("user choice = ",userchoice)
    //Generate computer choice
    const compchoice = genCompchoice();
     console.log("computer choice = ",compchoice);
    if(userchoice === compchoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userchoice==="rock"){
            //scissors,paper
            userWin = compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            // rock,scissors
            userWin = compchoice==="scissors"?false:true;
        }
        else{
            //rock,paper
            userWin = compchoice==="rock"?false:true;
        }
        showWinner(userWin,userchoice,compchoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})


let reset = document.querySelector(".reset-btn");
reset.addEventListener("click",()=>{
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
    userScorePara.innerText = 0;
    compScorePara.innerText = 0;
})
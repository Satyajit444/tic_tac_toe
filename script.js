let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let reset = document.getElementById("reset");

let turn = "X";
isgameOver = false;

// function to change the turn

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

//  function to check win

const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");

  let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  wins.forEach(e =>{
    if ((boxtext[e[0]].innerHTML === boxtext[e[1]].innerText) &&
    (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && 
    (boxtext[e[0]].innerText !== "")){
        document.querySelector('.info').innerText = boxtext[e[0]].innerText  + " won the game"
        isgameOver = true;
        document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "220px"
        let boxtexts = document.querySelectorAll(".boxtext");
        Array.from(boxtexts).forEach(element =>{
            element.innerText = ""
        })
    }
  })
};

// game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!isgameOver){
          document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
      }
    }
  });
});

// reset function

reset.addEventListener('click' , ()=>{
    // console.log("reset applied..")
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    })
    document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "0px"


})

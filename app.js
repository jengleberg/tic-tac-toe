window.onload = start;
var boxes = document.getElementsByTagName("td");
var turnText = document.querySelector(".playerTurn");
var counter = 1;
var winCounter = 0;
var OMoves = [];
var XMoves = [];

var winningCombinations = [[0,1,2],[3,4,5,],[6,7,8],[0,3,6],[1,4,7],
[2,5,8],[0,4,8],[2,4,6]];

function start(){
  addXandOListener();  addResetListener();
}

function addXandOListener(){
  for (var i = boxes.length - 1; i >= 0; i--) {
    boxes[i].addEventListener("click", addXorO);
  }
}

function addXorO(event) {
  if (event.target.innerHTML.length === 0) {
    if (counter % 2 === 0) {
      OMoves.push(parseInt(event.target.getAttribute("data-num")));
      event.target.innerHTML = "O";
      event.target.setAttribute("class","O");
      turnText.innerHTML = "X's turn";
      counter++;
      checkForWin(OMoves, "O");
    }
    else {
      XMoves.push(parseInt(event.target.getAttribute("data-num")));
      event.target.innerHTML = "X";
      event.target.setAttribute("class","X");
      turnText.innerHTML = "O's turn";
      counter++;
      checkForWin(XMoves, "X");
    }

    if (counter>= 10) {
      turnText.innerHTML = "GameOver!";
      var conf = confirm("It's a draw, do you want to play again?");
      if(conf) {
        resetBoard();
      }
    }
  }
}

function addResetListener() {
  var resetButton = document.getElementById("newGame");
  resetButton.addEventListener("click", resetBoard);
}

function checkForWin(movesArray, name) {
  // loop over the first array of winning combinations
    for (var i = 0; i < winningCombinations.length; i++) {
      // reset the winCounter
      winCounter = 0;
      // loop over each individual array
      for (var j = 0; j < winningCombinations[i].length; j++) {
        // if the number in winning combo array is === number is moves array, add to winCounter
        if(movesArray.indexOf(winningCombinations[i][j]) !== -1) {
          winCounter++;
        }
        // if winCounter === 3 that means all 3 moves are winning combinations and the game is over
        if(winCounter === 3){
          alert("Game Over, " + name + " wins!");
          resetBoard();
        }
      }
    }
}

function resetBoard() {
  for (var i = boxes.length - 1; i >=0; i--) {
    boxes[i].innerHTML = "";
    boxes[i].setAttribute("class","clear");
  }
   XMoves = [];
   OMoves = [];
   winCounter = 0;
   counter = 1;
   turnText.innerHTML="X's turn";
}
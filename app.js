/* eslint-disable no-unused-vars */

// Changes the letter in the box //
let playLetter = "X";
function makePlay(x) {
   if (document.getElementById(x).innerText !== "") {
      alert("Please Choose A Different Square");
   } else {
      document.getElementById(x).innerText = playLetter;
      if (playLetter === "X") {
         playLetter = "O";
      } else {
         playLetter = "X";
      }
   }
   updateArray();
}

function updateArray() {
   // checks to see if a square contains an X or an O //
   const playerX = document.getElementById("xname").value;
   const playerO = document.getElementById("oname").value;
   const patternArray = [];
   for (let i = 0; i <= 8; i++) {
      const squareVar = "square" + (i + 1);
      const squareValue = document.getElementById(squareVar).innerHTML;
      patternArray.push(squareValue);

      // winning patterns //
      const pattOne = [patternArray[0], patternArray[1], patternArray[2]];
      const pattTwo = [patternArray[3], patternArray[4], patternArray[5]];
      const pattThree = [patternArray[6], patternArray[7], patternArray[8]];
      const pattFour = [patternArray[0], patternArray[3], patternArray[6]];
      const pattFive = [patternArray[1], patternArray[4], patternArray[7]];
      const pattSix = [patternArray[2], patternArray[5], patternArray[8]];
      const pattSeven = [patternArray[0], patternArray[4], patternArray[8]];
      const pattEight = [patternArray[6], patternArray[4], patternArray[2]];
      const winOne = ["X", "X", "X"];
      const winTwo = ["O", "O", "O"];

      // checks to see if X or O has a winning pattern, if board is full with no winner its a tie //
      if (pattOne.toString() === winOne.toString() || pattTwo.toString() === winOne.toString() || pattThree.toString() === winOne.toString() || pattFour.toString() === winOne.toString() || pattFive.toString() === winOne.toString() || pattSix.toString() === winOne.toString() || pattSeven.toString() === winOne.toString() || pattEight.toString() === winOne.toString()) {
         endGame(`${playerX} WINS!`);
         break;
      } else if (pattOne.toString() === winTwo.toString() || pattTwo.toString() === winTwo.toString() || pattThree.toString() === winTwo.toString() || pattFour.toString() === winTwo.toString() || pattFive.toString() === winTwo.toString() || pattSix.toString() === winTwo.toString() || pattSeven.toString() === winTwo.toString() || pattEight.toString() === winTwo.toString()) {
         document.getElementById("notification").innerText = `${playerO.toUpperCase()} WINS!`;
         endGame(`${playerO} WINS!`);
         break;
      } else if (patternArray.length === 9 && patternArray.includes("") === false) {
         endGame(`${playerX} and ${playerO} TIE!`);
         break;
      }
   }
}

// Allows Player to refresh or reset //
function save() {
   if (confirm("Play Again?") === true) {
      for (let i = 0; i <= 8; i++) {
         const squareVar = "square" + (i + 1);
         document.getElementById(squareVar).innerHTML = "";
      }
      document.getElementById("notification").innerText = "X GOES FIRST";
   } else {
      window.close();
   }
}

function endGame(w) {
   document.getElementById("notification").innerText = `${w.toUpperCase()}`;
   setTimeout(() => {
      save();
   }, 500);
}

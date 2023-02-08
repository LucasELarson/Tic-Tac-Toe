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
   const patternArray = [];
   for (let i = 0; i <= 8; i++) {
      const squareVar = "square" + (i + 1);
      const squareValue = document.getElementById(squareVar).innerHTML;
      patternArray.push(squareValue);

      // Sets Up Patterns to comapare to see if theres a winner //
      const pattOne = [patternArray[0], patternArray[1], patternArray[2]];
      const pattTwo = [patternArray[3], patternArray[4], patternArray[5]];
      const pattThree = [patternArray[6], patternArray[7], patternArray[8]];
      const pattFour = [patternArray[0], patternArray[3], patternArray[6]];
      const pattFive = [patternArray[1], patternArray[4], patternArray[7]];
      const pattSix = [patternArray[2], patternArray[5], patternArray[8]];
      const pattSeven = [patternArray[0], patternArray[4], patternArray[8]];
      const pattEight = [patternArray[6], patternArray[4], patternArray[2]];
      console.log(patternArray);

      if (pattOne.toString() === winOne.toString() || pattTwo.toString() === winOne.toString() || pattThree.toString() === winOne.toString() || pattFour.toString() === winOne.toString() || pattFive.toString() === winOne.toString() || pattSix.toString() === winOne.toString() || pattSeven.toString() === winOne.toString() || pattEight.toString() === winOne.toString()) {
         alert("X Wins!");
         break;
      } else if (pattOne.toString() === winTwo.toString() || pattTwo.toString() === winTwo.toString() || pattThree.toString() === winTwo.toString() || pattFour.toString() === winTwo.toString() || pattFive.toString() === winTwo.toString() || pattSix.toString() === winTwo.toString() || pattSeven.toString() === winTwo.toString() || pattEight.toString() === winTwo.toString()) {
         alert("O Wins!");
         break;
      } else if (patternArray.length === 9 && patternArray.includes("") === false) {
         alert("TIE");
         break;
      }
   }
}

// winning patterns: 123   456   789   147   258   369   159   753 //
const winOne = ["X", "X", "X"];
const winTwo = ["O", "O", "O"];

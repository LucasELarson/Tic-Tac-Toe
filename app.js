/* eslint-disable no-unused-vars */
// winning patterns: 123   456   789   147   258   369   159   753 //
const patternArray = [];

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
}

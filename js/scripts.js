$(document).ready(function() {
  $("#numberForm").submit(function (e) {
    e.preventDefault();

let countToInt = $("input#inputNumber").val()
const beep = 
const boop = 
const neighbor = 
let humanArray = []

// okay, so here I have a loop, that makes an array of stringy numbers, counting up to the number the user inputs. 
for (let i = 0; i <= countToInt; i ++) {
  humanArray.push(" " + i);
}

// Now what I want to do it loop through that array, and replace all the threes with "Wybmn?"


    $("#result").text(displayArray);    
  });
});


// if (neighbor.includes(i)) {
//   displayArray.push("Won't you be my neighb")
// }
// if else (i.includes("2")) {
//   displayArray.push("Boop!, ")
// }
// if else (i.includes("1")) {
//   displayArray.push("Beep!, ")
// }

  // let stringArray = displayArray.toString();
  // let finalString1 = stringArray.replace(/.3..?/g, " Won't you be my cyber neighbor?, ");
  // let finalString2 = finalString1.replace(/.2..?/g, " Boop!, ");
  // let finalString3 = finalString2.replace(/.1..?/g, " Beep!, ")

// let countToInt = $("input#inputNumber").val()
// let displayArray = []
// for (let i = 0; i <= countToInt; i ++) {
//   if (i.includes("3")) {
//     displayArray.push("Won't you be my neighbor?, ")
//   }
//   if else (i.includes("2")) {
//     displayArray.push("Boop!, ")
//   }
//   if else (i.includes("1")) {
//     displayArray.push("Beep!, ")
//   }
//   displayArray.push(" " + i);
// }
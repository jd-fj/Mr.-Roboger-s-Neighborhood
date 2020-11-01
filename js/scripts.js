$(document).ready(function() {
  $("#numberForm").submit(function (e) {
    e.preventDefault();

let countToInt = $("input#inputNumber").val()
const beep = "Beep!, "
const boop = "Boop!, "
const neighb = "3"
let displayArray = []

for (let i = 0; i <= countToInt; i ++) {
  if (neighb.includes(i)) {
    displayArray.push("Won't you be my neighb")
  }
  // if else (i.includes("2")) {
  //   displayArray.push("Boop!, ")
  // }
  // if else (i.includes("1")) {
  //   displayArray.push("Beep!, ")
  // }
  else displayArray.push(" " + i);
}

    // let stringArray = displayArray.toString();
    // let finalString1 = stringArray.replace(/.3..?/g, " Won't you be my cyber neighbor?, ");
    // let finalString2 = finalString1.replace(/.2..?/g, " Boop!, ");
    // let finalString3 = finalString2.replace(/.1..?/g, " Beep!, ")

    $("#result").text(displayArray);    
  });
});


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
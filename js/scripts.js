$(document).ready(function() {
  $("#numberForm").submit(function (e) {
    e.preventDefault();

let countToInt = $("input#inputNumber").val()
const beep = "Beep!, "
const boop = "Boop!, "
const neighbor = "Wybmn?"
let humanArray = []
let roboArray = []



// okay, so here I have a loop, that makes an array of numbers, counting up to the number the user inputs. 
for (let i = 0; i <= countToInt; i ++) {
  humanArray.push(" " + i);
}
console.log(humanArray)

// Now what I want to do is loop through that array, and replace all the threes with "Wybmn?"
let mrRobo = humanArray.forEach(function(humanNumber) {
  if (humanNumber.includes(3)) {
    roboArray.push(neighbor)
  }
  else if (humanNumber.includes(2)) {
    roboArray.push(boop)
  }
  else roboArray.push(humanNumber);
  });

  $("#result").text(roboArray);  
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

// let mrRobo = humanArray.forEach(function(humanNumber) {
//   if (humanNumber.includes(3)) {
//     mrRobo.push("WYBMN?");
//   }
//   else {
//     mrRobo.push(humanNumber);
//   }
//   });

//   $("#result").text(mrRobo);  
//   });
// });
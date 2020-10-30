$(document).ready(function() {
  $("#numberForm").submit(function (e) {
    e.preventDefault();

    let countToInt = $("input#inputNumber").val()
    let displayArray = []
    for (let i = 0; i <= countToInt; i ++) {
      displayArray.push(" " + i);
    }

    let stringArray = displayArray.toString();
    let finalString1 = stringArray.replace(/.3..?/g, " Won't you be my cyber neighbor?, ");
    let finalString2 = finalString1.replace(/.2..?/g, " Boop!, ");
    let finalString3 = finalString2.replace(/.1..?/g, " Beep!, ")

    $("#result").text(finalString3);    
  });
});


// psudo coding a better way to do thi? 
// let countToInt = $("input#inputNumber").val()
// let displayArray = []
// const beep = "Beep!"
// const boop = "Boop!"

//     for (let i = 0; i <= countToInt; i ++) {
//       if (i.includes("3")) {
//         displayArray.push("Won't you be my neighbor?, ")
//       } else if (i.includes("2")) {
//         displayArray.push("Boop!, ")
//       } else if (i.includes("1")) {
//         displayArray.push("Beep!, ")
//       } else {
//       displayArray.push(" " + i);
//       }
//     }
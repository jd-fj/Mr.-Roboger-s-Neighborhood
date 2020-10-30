$(document).ready(function() {
  $("#numberForm").submit(function (e) {
    e.preventDefault();

    let countToInt = $("input#inputNumber").val()
    let displayArray = []
    
    for (let i = 0; i <= countToInt; i ++) {
      displayArray.push(i + " ");
    }

    let stringArray = displayArray.toString();
    let finalString1 = stringArray.replace(/[1]/g, "Beep!");
    let finalString2 = finalString1.replace(/[2]/g, "Boop!");

    
    $("#result").append(finalString2);

  });
});

// if (i === 1) {
//   displayArray.push("Beep! ")
// } else if (i === 2) {
//   displayArray.push("Boop! ")
// } else if (i === 3) {
//   displayArray.push("Won't you be my cyber neighbor? ")
// } else {

// roboArray = displayArray.replace(/[]/g,)

// for (let i = 0; i <= countToInt; i ++) {
//   displayArray.push(i + ", ");
// }

// 5 Test: "it should return a "Won't you be my cyber Neighbor?" when 13 is inputted"
// Expect(mrRobo(13)).toEqual("Won't you be my cyber Neighbor?");

// 6 Test: "It should return a "Boop!" when 21 is inputted
// Expect(mrRobo(21)).toEqual("Boop!");

// 7 Test: "It should return a "Boop!" when 32 is inputted
// Expect(mrRobo(32)).toEqual("Won't you be my cyber Neighbor?");

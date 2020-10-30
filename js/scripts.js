$(document).ready(function() {
  $("#numberForm").submit(function (e) {
    e.preventDefault();

    let countToInt = $("input#inputNumber").val()
    let displayArray = []
    
    for (let i = 0; i <= countToInt; i ++) {
      if (i === 1) {
        displayArray.push("Beep! ")
      } else if (i === 2) {
        displayArray.push("Boop! ")
      } else {
      displayArray.push(i + " ");
      }

    }

    $("#result").append(displayArray);

  });
});

// Test: "it should return a "Boop!" when 2 is inputted"
// Expect(mrRobo(2)).toEqual("Boop!");

// Test: "it should return a "Won't you be my cyber Neighbor?" when 3 is inputted"
// Expect(mrRobo(3)).toEqual("Won't you be my cyber Neighbor?");

// Test: "it should return a "Won't you be my cyber Neighbor?" when 13 is inputted"
// Expect(mrRobo(13)).toEqual("Won't you be my cyber Neighbor?");

// Test: "It should return a "Boop!" when 21 is inputted
// Expect(mrRobo(21)).toEqual("Boop!");

// Test: "It should return a "Boop!" when 32 is inputted
// Expect(mrRobo(32)).toEqual("Won't you be my cyber Neighbor?");

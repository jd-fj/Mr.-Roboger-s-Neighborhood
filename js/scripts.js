$(document).ready(function() {
  $("#numberForm").submit(function(e) {
    e.preventDefault();

  });)
});


// Describe: mrRobo()

// Test: "it should return a 0 when 0 is inputted"
// Expect(mrRobo(0)).toEqual(0);

// Test: "it should return a "Beep!" when 1 is inputted"
// Expect(mrRobo(1)).toEqual("Beep!");

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

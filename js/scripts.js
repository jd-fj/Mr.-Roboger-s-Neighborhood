$(document).ready(function() {
  $("#numberForm").submit(function (e) {
    
    
    
    let countToInt = $("input#inputNumber").val()
    let displayArray = []
    
    for (let i = 0; i <= countToInt; i ++) {
      displayArray.push(" " + i);
    }
    
    let stringArray = displayArray.toString();
    let finalString1 = stringArray.replace(/.3+../g, " Won't you be my cyber neighbor?");

    // let finalString2 = finalString1.replace(/[2]/g, " Boop!");
    // let finalString3 = finalString2.replace(/[1]/g, " Beep!")
    // let finalString4 = finalString3.replace(/Boop\!\ Beep\!\ /g, " Boop!")
    
    
    $("#result").text(finalString1);
    
    e.preventDefault();
  });
});


// 6 Test: "It should return a "Boop!" when 21 is inputted
// Expect(mrRobo(21)).toEqual("Boop!");

// 7 Test: "It should return a "Boop!" when 32 is inputted
// Expect(mrRobo(32)).toEqual("Won't you be my cyber Neighbor?");

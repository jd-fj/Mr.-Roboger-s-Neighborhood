
const beep = " Beep!"
const boop = " Boop!"
const neighbor = " Won't you be my neighbor?"
let humanArray = []
let roboArray = []

let mrHuman = function() {
  for (let i = 0; i <= countToInt; i ++) {
  humanArray.push(" " + i);
  }
}

let mrRobo = function(countToInt) {
  humanArray.forEach(function(humanNumber) {
    if (humanNumber.includes(3)) {
      roboArray.push(neighbor);
    } else if (humanNumber.includes(2)) {
      roboArray.push(boop);
    } else if (humanNumber.includes(1)) {
      roboArray.push(beep);
    } else { 
      roboArray.push(humanNumber);
    };
  });
  return roboArray;
}
    
$(document).ready(function() {
  $("#numberForm").submit(function (e) {
    e.preventDefault();
    let countToInt = $("input#inputNumber").val();
    $("#result").text(roboArray);  
  });
});
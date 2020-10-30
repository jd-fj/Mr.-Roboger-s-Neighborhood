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

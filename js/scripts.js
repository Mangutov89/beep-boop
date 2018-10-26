function beepBoopFunction(number) {
  if (number >= 4000) {
    var numberHuge = ("That number is too big!");
    return numberHuge;
  }
  else if (number <= 9 && number >= 0) {
    var inputArray = number.split('');
    for (var i = 0; i < (arrayBeepBoopOnes.length); i++) {
      if (parseInt(inputArray[0]) === i ) {
        var resultArrayPos4 = arrayBeepBoopOnes[i];
      }
    }
  }
  return resultArrayPos4
}

var arrayBeepBoopOnes = ["Beep!", "Boop!", "", "I'm sorry, Dave. I'm afraid I can't do that.", "", "", "I'm sorry, Dave. I'm afraid I can't do that.", "", "", "I'm sorry, Dave. I'm afraid I can't do that."];
var arrayBeepBoopTens = [];

$(document).ready(function() {
  $("form#beepboop").submit(function(event) {
  event.preventDefault();
  var number = $("input#inputNumber").val();
  var result = beepBoopFunction(number);

  $("#result").show();
  $("#result").text(result);
  });
});

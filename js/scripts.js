function beepBoopFunction(number) {
  if (number >= 4000) {
    var tooBig = ("that number is too big for Roman Numeral counting");
    return tooBig;
  }
  else if (number <= 9 && number >= 0) {
    var inputArray = number.split('');
    for (var i = 0; i < (arrayBeepBoopOnes.length+1); i++) {
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

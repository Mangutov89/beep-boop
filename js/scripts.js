function beepBoopFunction(number) {
  if (number) {
    var newArray = [...Array(number + 1).keys()];
    var stringArray = newArray.toString()
    console.log(stringArray);
    var splitArray = stringArray.split('');
    console.log(splitArray);
    return splitArray
  }
}

var arrayBeepBoop = ["Beep!", "Boop!", "I'm sorry, Dave. I'm afraid I can't do that."]

$(document).ready(function() {
  $("form#beepboop").submit(function(event) {
  event.preventDefault();
  var number = parseInt($("input#inputNumber").val());
  var result = beepBoopFunction(number);

  $("#result").show();
  $("#result").text(result);
  });
});

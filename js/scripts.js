function beepBoopFunction(number) {
  var newArray = [];
  for (var i = 0; i < number.length; i++) {
    newArray.push(number.charAt(i));
    console.log(newArray);
  }
  return newArray;
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

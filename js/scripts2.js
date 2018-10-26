
var robotSound = ["Beep!", "Boop!", "I'm sorry, Dave. I'm afraid I can't do that."]
var numberValue = [0, 1, 3]







$(document).ready(function() {
  $("form#beepboop").submit(function(event) {
  event.preventDefault();
  var number = $("input#inputNumber").val();
  var result = beepBoopFunction(number);

  $("#result").show();
  $("#result").text(result);
  });
});

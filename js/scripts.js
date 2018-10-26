function beepBoopFunction(number) {
  if (number / 3) {
    var divNum = "I'm sorry, Dave. I'm afraid I can't do that."
    return divNum;
  } else (number > 10) {
    var newNum = "Enter a lower number"
    return newNum
  }
}

$(document).ready(function() {
  $("form#beepboop").submit(function(event) {
  event.preventDefault();
  var number = parseInt($("input#inputNumber").val());
  var result = beepBoopFunction(number);

  $("#result").show();
  $("#result").text(result);
});

function beepBoopFunction(number) {
  var emptyArray = [];
  for (var i = 0; i <= number; i++) {
    if (i % 3 === 0 && i !== 0) {
      emptyArray.push(" I'm sorry Dave , I can't do that");
    } else if (i.toString().split("").includes("1")) {
      emptyArray.push(" Boop!");
    } else if (i.toString().split("").includes("0")) {
      emptyArray.push(" Beep!");
    } else {
      emptyArray.push(i);
    }
  }
  return emptyArray;
};


$(document).ready(function() {
  $("form#beepboop").submit(function(event) {
  event.preventDefault();
  var number = $("input#inputNumber").val();
  var result = beepBoopFunction(number);

  $("#result").show(result);
  $("#result").text(result);
  });
});

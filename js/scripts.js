function beepBoopFunction(number) {
  var emptyArray = [];
  for (var i = 0; i < number; i++) {
    if (i % 3 === 0) {
      emptyArray.push(" I'm sorry Dave , I can't do that");
      console.log(emptyArray);
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

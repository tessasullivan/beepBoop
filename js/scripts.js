function replaceNumbers(input) {
  var output = [];
  var textFor1 = "Beep!";
  var textFor2 = "Boop!";
  var textFor3 = "I'm sorry, Dave. I'm afraid I can't do that.";

  // Loop from 0 to inputted number, replacing
  // numbers with a 1 with Beep
  // numbers with a 2 with Boop
  // numbers with a 3 with I'm sorry, Dave. I'm afraid I can't do that.
  // All other numbers, do not replace
  for (var i = 0; i <= input; i++) {
    var splitNum = i.toString().split("");
    if (splitNum.includes("3")) {
      output.push(textFor3);
    } else if (splitNum.includes("2")) {
      output.push(textFor2);
    } else if (splitNum.includes("1")) {
      output.push(textFor1);
    } else {
      output.push(i);
    }
  }
  return output.join(', ');
}


$(document).ready(function() {
  $("#beepBoopForm").submit(function(event) {
    event.preventDefault();

    var input = $("#input").val();

    if ($('input').val() === "" || parseInt($('input').val()) < 0 || isNaN(parseInt($('input').val()))) {
      alert ("Please enter a positive number or zero.");
    } else {
      var output = replaceNumbers(input);
//      console.log (output);


//      $("#beepBoopForm").hide();
//      $("#beepBoopForm").
      $('#intro').hide();
      $(".input").text(input);
      $(".output").text(output);
      $("#result").show();
    }
  });
});

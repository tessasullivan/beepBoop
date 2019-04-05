function replaceNumbers(order, input) {
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
  if ( order === 'descending') {
    output.reverse();
  }
return output;
}


$(document).ready(function() {
  var order;

  // Determine which submit button was pushed
  $('#countAscending, #countDescending').click(function () {
     if (this.id === 'countAscending') {
        order = 'ascending';
     }
     else if (this.id === 'countDescending') {
        order = 'descending';
     }
  });

  // Now let's actually do some stuff
  $("#beepBoopForm").submit(function(event) {
    event.preventDefault();

    var input = $("#input").val();

    if ($('input').val() === "" || parseInt($('input').val()) < 0 || isNaN(parseInt($('input').val()))) {
      alert ("Please enter a positive number or zero.");
    } else {

      var output = replaceNumbers(order, input);

      // Hide the intro paragraph
      $('#intro').hide();

      // Replace the input and output fields on the results div with their values
      $(".input").text(input);

      // Clear previous results (if any) and empty the input field

      $('#result').empty();
      $("#input").val("");

      // Set up and create a list for each 'number'
      $('#result').append("<ul></ul>");
      output.forEach(function(item) {
        $('#result ul').append('<li>' + item + '</li>');
      });



      // Display the results before displaying the form again
      $("#beepBoopForm").before($("#result").show());
      $("#goAgain").show();

    }
  });
});

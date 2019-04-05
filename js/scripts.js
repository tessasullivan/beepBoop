


$(document).ready(function() {
  $("#beepBoopForm").submit(function(event) {
    event.preventDefault();

    var input = $("#input").val();

    if ($('input').val() === "" || parseInt($('input').val()) < 0 || isNaN(parseInt($('input').val()))) {
      alert ("Please enter a positive number or zero.");
    } else {
      var splitNumber = input.split("");

      var output = input;

      $("#beepBoopForm").hide();

      $(".input").text(input);
      $(".output").text(output);
      $("#result").show();
    }
  });
});

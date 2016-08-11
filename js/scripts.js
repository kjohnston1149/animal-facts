$(function() {
  $("form").submit(function(event){

    var animal = $("#animalTypes").val();

    if (animal === "Turtles") {
      $('#turtles').show();
      $('#snakes').hide();
      $('#insects').hide();
    } else if (animal === "Snakes") {
      $('#snakes').show();
      $('#turtles').hide();
      $('#insects').hide();
    } else { 
      $('#insects').show();
      $('#turtles').hide();
      $('#snakes').hide();
    }

    event.preventDefault();
  });

});

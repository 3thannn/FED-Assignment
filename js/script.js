$(document).ready(function(){
  $(".event-info").hide();
});

//Listening function
$("#swimming-btn").click(function(){
  $("#swimming-pic").slideToggle().delay("3000");
  $("#swimming-info").fadeToggle();
});

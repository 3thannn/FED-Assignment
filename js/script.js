$(document).ready(function(){
  $(".event-info").hide();
});

//Listening function
$("#swimming-btn").click(function(){
  $("#swimming-pic").slideToggle().delay("3000");
  $("#swimming-info").fadeToggle();
});

//iframe
$("#running-web").click(function(){
  $("#min-web").attr('src', 'ethan.html');
});
$("#golf-web").click(function(){
  $("#min-web").attr('src', 'Dickson.html');
});
$("#swimming-web").click(function(){
  $("#min-web").attr('src', 'jiacheng.html');
});
$("#basketball-web").click(function(){
  $("#min-web").attr('src', 'elvanindex.html');
});

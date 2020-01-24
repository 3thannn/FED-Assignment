$(document).ready(function(){
  $(".event-info").hide();
});

//Listening function

//Upcoming Events
$("#swimming-btn").click(function(){
  $("#swimming-pic").slideToggle().delay("3000");
  $("#swimming-info").fadeToggle();
});

//iframe
$("#running-web").click(function(){
  $("#min-web").attr('src', 'ethan.html');
  $("#info-footer").attr('href', 'ethan.html');
});
$("#golf-web").click(function(){
  $("#min-web").attr('src', 'Dickson.html');
  $("#info-footer").attr('href', 'Dickson.html');
});
$("#swimming-web").click(function(){
  $("#min-web").attr('src', 'jiacheng.html');
  $("#info-footer").attr('href', 'jiacheng.html');
});
$("#basketball-web").click(function(){
  $("#min-web").attr('src', 'elvanindex.html');
  $("#info-footer").attr('href', 'elvanindex.html');
});

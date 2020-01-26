//Preload function
$(".event-info").hide();

//Listening function

//Upcoming Events
$("#swimming-btn").click(function(){
  $("#swimming-pic").slideToggle();
  $("#swimming-info").fadeToggle();
});

$("#yoga-btn").click(function(){
  $("#yoga-pic").slideToggle();
  $("#yoga-info").fadeToggle();
});

$("#esports-btn").click(function(){
  $("#esports-pic").slideToggle();
  $("#esports-info").fadeToggle();
});

//iframe
$("running-web").click(function(){
  $("#info-footer").attr('scrolling', 'yes');
});
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

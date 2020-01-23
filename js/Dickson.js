//Preload function
$("#section4-1").hide();
$("#section5-1").hide();
$("#Abdul").hide();

//Function
function ShowAbdul(){
  $("#section4-1").toggle(1000);
  $("#Abdul").fadeToggle("slow");
}
function quizValidation(){
  var name = document.getElementById('user-name').value;
  alert(name);

  $("#section5-1").fadeIn("slow");
  window.location.hash = "#section5-1";
}

//Listening Function
$("#quiz").submit(function(){
  return false;
});

//Var
var loaded = false;

//Preload function
$("#section1").hide();
$(".info").hide();

//Listening Fucntion
$("#azzi").click(function(){
  LoadSector();
  $("#name").html('Azzi');
  $("#elvan-accordion, #dickson-accordion").hide(function(){
    $("#azzi-accordion").fadeIn(1000);
  });
});
$("#elvan").click(function(){
  LoadSector();
  $("#name").html('Elvan');
  $("#azzi-accordion, #dickson-accordion").hide(function(){
    $("#elvan-accordion").fadeIn(1000);
  });
});
$("#dickson").click(function(){
  LoadSector();
  $("#name").html('Dickson');
  $("#azzi-accordion, #dickson-accordion").hide(function(){
    $("#elvan-accordion").fadeIn(1000);
  });
});
//Function
function LoadSector(){
  if(loaded == false){
    $("#section1").slideToggle(500);
    loaded = true;
  }
}

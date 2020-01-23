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
  var marks = 0;
  var name = document.getElementById("user-name").value;
  var question1 = [];
  $.each($("input[name='clubs']:checked"), function(){
      question1.push($(this).val());
      //Dickson
      for(var i in question1){
        if(i == 0 || i == 1 || i == 2){
          marks += 1;
        }
      }
  });
  var question2 = 
  alert(marks);
  $("#section5-1").fadeIn("slow");
  window.location.hash = "#section5-1";
}

//Listening Function
$("#Dickson-Quiz").submit(function(){
  return false;
});

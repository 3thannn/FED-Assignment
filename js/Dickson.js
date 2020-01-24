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
  var mark = 0;
  var counter = 0;
  var name = document.getElementById("user-name").value;

  //Question 1
  var question1 = [];
  $(':checkbox:checked').each(function(i){
    question1[i] = $(this).val();
    if(question1[i]=="clubs" || question1[i]=="iron" || question1[i]=="wedges"){
      mark += 1;
    }
    else if(question1[i]=="driver"){
      mark = 0;
    }
  });//Dickson Kuan

  //Question2
  var radioValue = $("input[name='max-amount-clubs']:checked").val();
  if(radioValue == "14"){
      mark += 1;
  }

  //Question3
  var question3 =  $("#expensive-clubs").val();
  if(question3 == "181000"){
    mark += 1;
  }

  //Question 4
  var question4 = $("#question4").val()
  if(question4 == "Callaway"){
    mark += 1;
  }

  $("#section5").hide();
  $("#section5-1").fadeIn("slow");
  document.getElementById("name").innerHTML = name;
  document.getElementById("marks").innerHTML = mark;
  window.location.hash = "#section5-1";
}

//Listening Function
$("#Dickson-Quiz").submit(function(){
  return false;
});
$( "#location" ).click(function() {
  window.location.hash = "#section2";
});
$( "#golfers" ).click(function() {
  window.location.hash = "#section4";
});
$( "#clubs" ).click(function() {
  window.location.hash = "#section5";
});

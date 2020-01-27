$(document).ready(function(){
  $("#mySubmit").attr('disabled', 'disabled');
});
function validateform(){
  var question1 = $("input[name=ownshoes]:checked").val();
  var question2 = $("input[name=oftenrun]:checked").val();
  var question3 = document.getElementById('rundist').val();
  var question4 = $("input[name=recommend]:checked").val();
  //yet to learn ajax to post and save in
  if(question1 && question2 && question3 && question4){
    $("input[type=submit]").prop("disabled", false);
}
function readFormInputs(){
  document.getElementById('formcontent').innerHTML = "Answer recorded!";
  var question1 = $("input[name=ownshoes]:checked").val();
  var question2 = $("input[name=oftenrun]:checked").val();
  var question3 = document.getElementById('rundist').val();
  var question4 = $("input[name=recommend]:checked").val();
  //yet to learn ajax to post and save
}

function feedbackDone(){
  alert("Feedback Submitted! Thank You!");
}

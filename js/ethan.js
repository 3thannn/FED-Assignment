$(document).ready(function (){
    validate();
    $('input:radio[name='ownshoes'], input:radio[name='oftenrun'], #rundist, input:radio[name='recommend'], input[type=submit]').change(validate);
});

function validate(){
    if ($("input:radio[name='ownshoes']").is(":checked")   &&
        $("input:radio[name='oftenrun']").is(":checked")   &&
        $('#rundist').val().length    >   0) &&
        $("input:radio[name='recommend']").is(":checked"){
        $("input[type=submit]").prop("disabled", false);
    }
    else {
        $("input[type=submit]").prop("disabled", true);
    }
}
function readFormInputs(){
  document.getElementById('formcontent').innerHTML = "Answer recorded!";
  var question1 = $("input[name=ownshoes]:checked").val();
  var question2 = $("input[name=oftenrun]:checked").val();
  var question3 = document.getElementById('rundist').val();
  var question4 = $("input[name=recommend]:checked").val();
  //yet to learn ajax to post and save in
}

function feedbackdone(){
  alert("Feedback Submitted! Thank You!")
}

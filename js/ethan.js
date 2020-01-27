function readFormInputs(){
  document.getElementById('formcontent').innerHTML = "Answer recorded!";
  var question1 = $("input[name=ownshoes]:checked").val();
  var question2 = $("input[name=oftenrun]:checked").val();
  var question3 = document.getElementById('rundist').val();
  var question4 = $("input[name=recommend]:checked").val();
}

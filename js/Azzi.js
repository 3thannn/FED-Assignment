function CheckQuiz(){
  var qns1 = $("input[name='athlete']:checked").val();
  var qns2 = $("input[name='athletes']:checked").val();
  var qns3 = $("#qns3").val();
  var qns4 = $("#qns4").val();
  var marks = 0;
  if(qns1 == "joseph"){
    marks += 1;
  }
  if(qns2 == "irfan"){
    marks += 1;
  }
  if(qns3 == "Siti Khadijah"){
    marks += 1;
  }
  if(qns4 == "Fandi Ahmad"){
    marks += 1;
  }
  alert("You have scored "+marks+"/4");
  return false;
}

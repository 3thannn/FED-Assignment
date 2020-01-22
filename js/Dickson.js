//Var
var modal = document.getElementById("myModal1");
var btn = document.getElementById("modal1-btn");
var span = document.getElementsByClassName("close")[0];

//Function
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

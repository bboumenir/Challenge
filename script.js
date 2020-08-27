

function myFunction() {

  var x = document.getElementById("slides1");
  var y = document.getElementById("slides2");

  if (x.style.display === "flex")   {
    x.style.display = "none";
    y.style.display = "flex";
  } else {
    x.style.display = "flex";
    y.style.display = "none";

  }
} 


myFunction()














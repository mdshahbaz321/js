function wap()
{
   var x = document.getElementById("range-1").value;
  var y = document.getElementById("image");
  y.style.WebkitFilter = "brightness("+x+"%)";
y.style.filter= "brightness("+x+"%)";  
}
function wap1()
{
    var x = document.getElementById("range-2").value;
    var y = document.getElementById("image");
    y.style.WebkitFilter = "contrast("+x+"%)";
    y.style.filter = "contrast("+x+"%)";
}
function wap2()
{
    var x = document.getElementById("range-3").value;
    var y = document.getElementById("image");
    y.style.WebkitFilter = "saturate("+x+"%)";
    y.style.filter = "saturate("+x+"%)";
}
function calculate()
{
    var x = document.getElementById("write").value;
    var y = document.getElementById("result");
    y.innerHTML = "Your answer is " +eval(x);
}
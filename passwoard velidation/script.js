function digit()
{
    var x = document.getElementById("text");
    x.innerHTML = "Enter minimum 10 digit !" 
}

function show()
{
    var  x = document.getElementById("text");
    x.style.display = "none";
    var y = document.getElementById("loader");
    y.style.opacity = "1";
    var r = document.getElementById("tick");
    var s = document.getElementById("pass").value;
    s.length>9? y.style.opacity = "0" : y.style.opacity = "1";
    s.length>9? r.style.opacity = "1" : r.style.opacity = "0";
   
}
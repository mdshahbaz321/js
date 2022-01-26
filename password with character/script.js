var z= document.getElementById("alert");

function warning()
{
    
    z.innerHTML = "Enter minimum 8 character!";
    var dis = document.getElementById("box");
    dis.style.display = "block";
}
function result()
{
    var y = document.getElementById("pass-check");
    var x = document.getElementById("password").value;
    x.length>7? y.style.opacity = "1" : y.style.opacity = "0";
    x.length>7? z.style.display = "none" : z.style.display = "block";
    var capital = /[A-Z]/g;
    var small = /[a-z]/g;
    var number = /[0-9]/g;
    var a = document.getElementById("upper-check");
    var b = document.getElementById("upper-close");
    var upper = document.getElementById("upper");
    x.match(capital)?a.style.opacity = "1" : a.style.opacity = "0";
    x.match(capital)?b.style.opacity = "0" : b.style.opacity = "1";
    x.match(capital)?upper.style.color = "green" : upper.style.color = "red";
    var c = document.getElementById("lower-check");
    var d = document.getElementById("lower-close");
    var lower = document.getElementById("lower");
    x.match(small)?c.style.opacity = "1" : c.style.opacity = "0";
    x.match(small)?d.style.opacity = "0" : d.style.opacity = "1";
    x.match(small)?lower.style.color = "green" : lower.style.color = "red";
    var f = document.getElementById("num-check");
    var g = document.getElementById("num-close");
    var num = document.getElementById("num");
    x.match(number)?f.style.opacity = "1" : f.style.opacity = "0";
    x.match(number)?g.style.opacity = "0" : g.style.opacity = "1";
    x.match(number)?num.style.color = "green" : num.style.color = "red";
    var box = document.getElementById("box");
    x.match(capita) &&x.match(small) &&x.match(number)?box.style.display = "none" :box.style.display = "block";
}
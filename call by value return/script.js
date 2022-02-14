function main()
{
    var x = number(document.getElementById("num-one").value);
    var y = number(document.getElementById("num-two").value);
    add(x,y);
    
}

function add(a,b)
{
   window.alert(a+b);
}
var  first_name = document.getElementById("fname");
first_name.onblur = function event()
{
    var first = document.getElementById("fname").value;
    var input = document.getElementById("fname");
    var img = document.getElementById("war");
    if(first == "")
    {
        input.style.border = "1px solid red";
        img.style.display = "block";
    };
    first_name.onclick = function()
    {
        var banner = document.getElementById("ban");
        banner.style.display = "block";
        img.style.display = "none";
        first_name.onblur = function()
            {
                banner.style.display = "none";
                event();
            }

    }
}
var  last_name = document.getElementById("lname");
last_name.onblur = function event()
{
    var last = document.getElementById("lname").value;
    var input = document.getElementById("lname");
    var img = document.getElementById("war-1");
    if(last == "")
    {
        input.style.border = "1px solid red";
        img.style.display = "block";
    }
    
    
    
}

alert();
var frm = document.getElementById("form");
frm.onsubmit = function(){
    var input = document.getElementById("user").value;
    var i;
    for(i="1";i<=10;i++)
    {
        document.write(input*i+"<br>");
    }
}
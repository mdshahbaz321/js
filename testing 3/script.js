var frm = document.getElementById("form");
frm.onsubmit = function(){
    var text_input = document.getElementById("text").value;
    var num_input = document.getElementById("number").value;
    var i;
    for(i=1;i<=num_input;i++){
        document.write("<h1>"+text_input+"</h1>"+"<br>");
    }
}
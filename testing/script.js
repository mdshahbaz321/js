var to = ["saurav","gaurav",123];
to.push("shahbaz","1th");
to.pop();
to.shift();
to.unshift("Wap institute");
to.splice(1,2,"waoo SHAHBAZ you are awsm");
var x = to.slice(2);
window.alert(x.join(" ").toString());
var frm = document.getElementById("form");
frm.onsubmit = function(){
    var user = {firstname,lastname,result};
    user.firstname = document.getElementById("firstname").value;
    user.lastname = document.getElementById("lastname").value;
    user.result = document.getElementById("result");
    user.result.innerHTML = user.firstname+" "+user.lastname;
    return false;
}
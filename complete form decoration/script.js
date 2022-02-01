//start first name coding
function firstname()
{
    var inputval = document.getElementById("fname").value;
    var input = document.getElementById("fname");
    var check = document.getElementById("fcheck");
    inputval == ""?input.setAttribute("value","Please Enter your first name!"):check.style.display = "inline";
    inputval == ""?input.setAttribute("class","animated infinite bounce"):check.style.display = "inline";
    inputval == ""?input.style.color = "red":check.style.display = "inline";
    inputval == ""?input.style.border = "1px solid red": check.style.display = "inline";
   
} 

function firstclose()
{
    var inputval = document.getElementById("fname").value;
    var x = document.getElementById("fname");
    var check = document.getElementById("fcheck");
  inputval = "Please Enter your first name" ? x.setAttribute("value","") : check.style.display = "inline";
  inputval = "Please Enter your first name" ? x.style.color = "black" : check.style.display = "inline";
  inputval = "Please Enter your first name" ? x.setAttribute("class","") : check.style.display = "inline";
  inputval = "Please Enter your first name" ? x.style.border = "1px solid #ccc" : check.style.display = "inline";
//end firstname coding
//start last name coding

}
function lastnam()
{
  var inputval = document.getElementById("lname").value;
    var input = document.getElementById("lname");
    var check = document.getElementById("lcheck");
    inputval == ""?input.setAttribute("value","Please Enter your last name!"):check.style.display = "inline";
    inputval == ""?input.setAttribute("class","animated infinite bounce"):check.style.display = "inline";
    inputval == ""?input.style.color = "red":check.style.display = "inline";
    inputval == ""?input.style.border = "1px solid red": check.style.display = "inline";
   
}
function lastclose()
{
    var inputval = document.getElementById("lname").value;
    var x = document.getElementById("lname");
    var check = document.getElementById("lcheck");
  inputval = "Please Enter your last name" ? x.setAttribute("value","") : check.style.display = "inline";
  inputval = "Please Enter your last name" ? x.style.color = "black" : check.style.display = "inline";
  inputval = "Please Enter your last name" ? x.setAttribute("class","") : check.style.display = "inline";
  inputval = "Please Enter your last name" ? x.style.border = "1px solid #ccc" : check.style.display = "inline";
  

}
// end lastname coding
// start mobile no. coding
function phone()
{
  var inputval = document.getElementById("mnumber").value;
 var input = document.getElementById("mnumber");
 var check = document.getElementById("mcheck");
 var recheck = inputval = "" ? input.window.alert("Please Enter mobile number"):inputval;
 var digitcheck = recheck.length == 10? recheck : input.setAttribute("value","Enter 10 digit number!");
 digitcheck.charAt(0) == 9 || digitcheck.charAt(0)==8 || digitcheck.charAt(0) ==7 || digitcheck.charAt(0)==6 ? check.style.display = "inline":input.window.alert("Please enter valid number and indian number only"); 

}



//end mobile no. coding
//strt coding re-mobile
function rmobile()
{
  var mobile = document.getElementById("mnumber").value;
  var check = document.getElementById("rcheck");
  var rnumber = document.getElementById("rnumber");
  var input = document.getElementById("rnumber").value;
  var rcheck=input == ""? input.window.alert("Please re-enter your mobile number "):mobile;
  input == mobile? check.style.display = "inline":rnumber.value = "not match with mobile number";

}
//end coding re mobile
// start user name coding
function user()
{
 var finput = document.getElementById("fname").value;
 var linput = document.getElementById("lname").value;
 var username = document.getElementById("uname");
 var check = document.getElementById("ucheck");
 username.setAttribute("value",finput+linput);
 username.setAttribute("disabled","disabled");
 check.style.display = "inline"

}
//end user name coding
//start submit button coding
function sub()
{
  var fastname = document.getElementById("fname").value;
  var lastname = document.getElementById("lname").value;
  var mobile = document.getElementById("mnumber").value;
  var renum = document.getElementById("rnumber").value;
  var mail = document.getElementById("email").value;
  var user = document.getElementById("uname").value;
  var pass = document.getElementById("pass").value;
  var sub = document.getElementById("submit");
  fastname,lastname,mobile,renum,mail,user,pass = ""? sub.disabled = true : sub.disabled = false;
  fastname,lastname,mobile,renum,mail,user,pass = ""? sub.disabled = true : sub.style.background = "red";
  fastname,lastname,mobile,renum,mail,user,pass = ""? sub.disabled = true : sub.style.cursor = "pointer";

}
  //end submit coding
  // start password coding
  function password1()
  {
    
    var pass = document.getElementById("pass").value;
    var input = document.getElementById("pass");
    var  check = document.getElementById("pcheck");
    var cap = /[A-Z]/g;
    var small = /[a-z]/g;
    var num = /[0-9]/g;
    var alpha = /[~|`|!|@|#|$|%|^|&|&|*|(|)|_|-|+|=]/g;
  var check_pass = pass == "" ? window.alert("Please Enter Password ") : pass
  var check_first = check_pass.charAt(0).match(cap) ? check_pass : window.alert("Please Enter First letter capital");
  var check_small = check_first.match(small)? check_first : window.alert("Enter Minimum one Small letter");
  var check_num = check_small.match(num)? check_small : window.alert("Please Enter minimum one number");
  var check_alpha = check_num.match(alpha)? check_num : window.alert("please Enter alpha numaric number Ex:$,@,% etc");
  check_alpha.length>6 ? check.style.display = "inline" : window.alert("Please Enter minimu 7 character");
  }
  // end password coding
  //start email coding
  function email_val()
  {
    var email = document.getElementById("email").value;
    var input = document.getElementById("email");
    var div = document.getElementById("email-box");
    var check = document.getElementById("echeck");
    email.match('@')? div.style.display = "inline" : email;
    email.match("gmail.com")? div.style.display = "none" : email;
    email.match("yahoomail.com")? div.style.display = "none" : email;
    email.match("@gmail.com")?check.style.display = "inline":email;
    email.match("@yahoomail.com")?check.style.display = "inline":email;


  }
  function email_click()
  {
    var email = document.getElementById("email").value;
    var input = document.getElementById("email");
    var div = document.getElementById("email-box");
    var check = document.getElementById("echeck");
    input.value = email+"gmail.com";
    email = "gmail.com"? div.style.display = "none" : email;
    email = "gmail.com"? check.style.display = "inline" : email;

}
function yahoo_click()
{
  var yahoo = document.getElementById("email").value;
  var input = document.getElementById("email");
  var check = document.getElementById("echeck");
  var div = document.getElementById("email-box");
  input.value = yahoo+"yahoomail.com";
  yahoo = "yahoomail.com"? div.style.display = "none" : yahoo;
  yahoo = "yahoomail.com"? check.style.display = "inline" : yahoo;
}
  //end email coding

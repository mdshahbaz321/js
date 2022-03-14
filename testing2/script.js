var frm = document.getElementById("form");
frm.onsubmit = function(){
    var wap = [];
    wap.short(function(x,y){return x-y});
    wap[0] = document.getElementById("a").value;
    wap[1] = document.getElementById("b").value;
    wap[2] = document.getElementById("c").value;
    wap[3] = document.getElementById("d").value;
    wap[4] = document.getElementById("e").value;
    wap[5] = document.getElementById("f").value;
    wap[6] = document.getElementById("g").value;
    wap[7]= document.getElementById("h").value;
    wap[8] = document.getElementById("i").value;
    wap[9] = document.getElementById("j").value;
    
    window.alert(wap.toString());
}
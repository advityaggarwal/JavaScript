var new1;
function prob1()
{
var a=document.getElementById("width").value;
var b=document.getElementById("height").value;
var c=document.getElementById("left").value;
var d=document.getElementById("top").value;
new1=window.open("","","width="+a+",height="+b+",top="+d+",left="+c+"");
new1.document.write("This window is opened on clicking of the New Window button");
}


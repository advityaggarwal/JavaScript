
/*function getdata()
{
    console.log("Hellaaa...");
    document.write("okay");
    
}*/
/*document.write("weE");*/
/*var anotherwindow
function showdata()
{
    anotherwindow=window.open("","","height=200px,width=100px","");
    anotherwindow.document.write("weLCOME");
}*/
var name=('madari');
console.log(name);
console.log('Hellaaa')
function submitdata()
{
    var anotherwindow2;
    anotherwindow2=window.open("","","height=500px,width=700px","");
    var a=document.getElementById("name").value;
    alert("Hi"+a);
    var b=document.getElementById("pass").value;
    var c=document.getElementById("sal").value;
    var salary =parseInt(c);
    anotherwindow2.document.write("ID="+a+"<br>NAme="+b+"<br>sal="+c);
}


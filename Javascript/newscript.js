function f1()
{
    var name=document.getElementById("name").value;
    var mywindow=window.open("","new window","width=100px,height=100px");
    mywindow.document.write(name);
}
function f2()
{
    var vec=document.getElementById("vehicles").value;
    if(vec="Toyta")
    document.getElementById("price").value=10000;
    else if(vec="Benz")
    document.getElementById("price").value=4500;
}
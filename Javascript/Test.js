var set1 = new Set();
var arrayProduct=[];
var Product= function(id,name,price)
{
    this.prodId=id;
    this.prodName=name;
    this.prodPrice=price;
}


function getData()
{
    var a1 = document.getElementById("num1").value;
    var a2 = document.getElementById("num2").value;
    var a3 = document.getElementById("num3").value;
    var prod1 = new Product(a1,a2,a3);
    set1.add(prod1);
    console.log(a1,a2,a3);
    getDisplay()
    getSort();   
}



function getDisplay()
{
    for(obj of set1)
    {
        console.log(obj.prodId,obj.prodName,obj.prodPrice);
    }
}




function getSort()
{
    var sortobj = Array.from(set1);
    sortobj.sort(function(a,b)
    {
        return a.prodId-b.prodId;
    })
    set1= new Set(sortobj);
}
function onDelete()
{
    for(obj of set1)
    {
        if(obj.prodId==0)
        {
            set1.delete(obj);
        }
    }
}

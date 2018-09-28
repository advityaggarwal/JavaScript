var Pid,Pname,Pprice;
var Product=new Set();
var prod= function(id,name,price)
{
    this.id=id;
    this.name=name;
    this.price=price;
}
var obj1=new prod(1003,"Abcd",1500);
var obj2=new prod(1002,"xyz",2500);
var obj3=new prod(1001,"pqrs",3500);
Product.add(obj1);
Product.add(obj2);
Product.add(obj3);

delet=function()
{
    for(obj of Product)
    {
        if(obj.id==1002)
        {
            Product.delete(obj2);
        }
    }
}

display1=function()
{
    for(pr of Product)
    {
        console.log(pr.id+" "+pr.name+" "+pr.price);
    }
}
var sortProduct=new Array;
sortit=function(Product)
{
    var arr=Array.from(Product);
    var arr1=arr.sort(function(a,b){return a.id-b.id});
    sortProduct=new Set(arr1);
    display2();  
}

display2=function()
{
    for(p of sortProduct)
    {
        console.log(p.id+" "+p.name+" "+p.price);
    }
}


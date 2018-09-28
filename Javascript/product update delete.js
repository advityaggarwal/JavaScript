//0.0.0.0.0.
                                                                                                                                                                                                                                                                                                 var j=0;
var productarray=[];
var row;
function submitdata()
{
    var a=document.getElementById("prodId").value;
    var b=document.getElementById("prodname").value;
    var c=document.getElementById("prodprice").value;
    var newproduct=new Product(a,b,c);
    productarray.push(newproduct);
    display(productarray);
}
var Product=function(pro_id,name,price)
{
    this.id=pro_id;
    this.name=name;
    this.price=price;
}
function display(arr)
{    
        document.getElementById("mytable").innerHTML+="<tr><td>"+arr[arr.length-1].id+"</td><td>"+arr[arr.length-1].name+"</td><td>"+arr[arr.length-1].price+"</td><td><input type='button' value='delete' onclick='deleteRow(this)'><input type='button' value='update' onclick='update(this)'>";
        //j++;   
        console.log(productarray);   
}
function deleteRow(r) 
{       
        /*var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("mytable").deleteRow(i);
        productarray.splice(i-1,1);
        j--;*/
        var i = r.parentNode.parentNode.rowIndex;
        var x=document.getElementById("mytable").rows[i].cells[0].innerHTML;
        document.getElementById("mytable").deleteRow(i);
        var rindex=productarray.findIndex(function getindex(element){if(element.id==x)return element;});
        productarray.splice(rindex,1);
        //j--;
        console.log(productarray);
}
function update(r)
{
    var i = r.parentNode.parentNode.rowIndex;
    row=i;
    document.getElementById("form2").innerHTML="<table><tr><td>Product ID=<input type='text' readonly id='ids' value=''></td></tr>"+"<tr><td>Product Name=<input type='text' readonly id='names' value=''></td></tr>"+"<tr><td>Product Price=<input type='text' id='prices' value=''></td></tr>"+"<tr><td><input type='button' id='chan' value='change' onclick='change();'></td></tr></table>";
    document.getElementById("ids").value=document.getElementById('mytable').rows[row].cells[0].textContent;
    document.getElementById("names").value=document.getElementById("mytable").rows[row].cells[1].textContent;
}
function change()
{
    
    /*document.getElementById("mytable").rows[row].cells[0].innerHTML=document.getElementById("ids").value;
    document.getElementById("mytable").rows[row].cells[1].innerHTML=document.getElementById("names").value;*/
    document.getElementById("mytable").rows[row].cells[2].innerHTML=document.getElementById("prices").value;
    productarray[row-1].price=document.getElementById("prices").value;
    //(productarray[row-1].price).push(data);
    console.log(productarray);
    erase();
}
function erase()
{
    var x=document.getElementById("form2");
    x.removeChild(x.childNodes[0]);
}



/*
var pro1=new Product(1001,"Soap",50.50);
var pro2=new Product(1002,"Shampoo",110.80);
var pro3=new Product(1003,"Creme",160.99);
var pro4=new Product(1004,"Glass",100.12);
var pro5=new Product(1005,"Tv",8000.00);
var info=[pro1,pro2,pro3,pro4,pro5];
//info[1].getdata();

//sorting function
function sorting(arr)
{
    
    for(var k=0;k<5;k++)
    {

        for(var j=k+1;j<5;j++)
    {
        if(arr[j].price<arr[k].price)
        {
            var temp=arr[j];
            arr[j]=arr[k];
            arr[k]=temp;
        }
    }
    console.log(arr[k]);
    }
    
};
sorting(info);
//delete function
function del(arr,id)
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i].pro_id===id)
        {
            info.splice(i,1);
        }
    }
    for(var j=0;j<arr.length;j++)
{
    console.log(arr[j]);
}
};
del(info,1002);

var x;
function del(arr,id)
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i].pro_id===id)
        {
            x=i;
        }
    }
    for(var j=x;j<arr.length;j++)
{
    arr[j]=arr[j+1];
}
for(var j=0;j<arr.length-1;j++)
{
    console.log(arr[j]);
}
};
del(info,1004);

var sor=[];
function sorting(arr)
{
    var sor=[];
    for(var k=0;k<5;k++)
    {
        var min=arr[k].price;
        for(var j=k+1;j<5;j++)
    {
        if(arr[j].price<min)
        {
            min=arr[j].price;
            arr[j].price=76457346;
        }
        
    }
    sor.push(min);
    
}
for(var i=0;i<5;i++)
{
    console.log(sor[i]);
}   
};
sorting(info);*/

/*for(var i=0;i<info.length;i++)
{
    console.log(info[i].pro_id);
    console.log(info[i].name);
    console.log(info[i].price);
    console.log(info[i].getdata());
}


var Product=function(pro_id,name,price)
{
    var prod={};        //empty object 
    prod.pro_id=pro_id;
    prod.name=name;
    prod.price=price;

    return prod;
};

var pro1= Product(19876,"soap",50.50);
var pro2= Product(1123,"shampoo",110.80);
var pro3= Product(1756,"creme",160.99);
var pro4= Product(15423,"glass",100.12);
var pro5= Product(14253,"Tv",80000.00);

var info=[pro1,pro2,pro3,pro4,pro5];

for(var i=0;i<5;i++)
{
    console.log(info[i]);
}

*/
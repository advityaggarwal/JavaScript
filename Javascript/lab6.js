var invoicewindow;
function checkout()
{
    var a=parseInt(document.forms["forms"]["barbie"].value);
    var b=parseInt(document.forms["forms"]["calc"].value);
    var c=parseInt(document.forms["forms"]["mobile"].value);
    var d=parseInt(document.forms["forms"]["dvd"].value);
    if(isNaN(a)){a=0;}
   var bar=a*20;
    if(isNaN(b)){b=0;}
    var cal=b*30;
    if(isNaN(c)){c=0;}
    var mob=c*40;
    if(isNaN(d)){d=0;}
   var dvdr=d*50;
    var tot=bar+cal+mob+dvdr;
    
    if(a==0&&b==0&&c==0&&d==0)
    {
        alert('No item selected');
    }
    else
    {
        
        invoicewindow=window.open("","","height=700px,width=700px","");
        invoicewindow.document.write("<h1>INVOICE</h1>");
        invoicewindow.document.write("<table border=2px><tr><td>PRODUCT</td><td>QUANTITY</td><td>PRICE</td><td>TOTAL</td></tr>");
        if(a!=0)
        {
            invoicewindow.document.write("<tr><td>Barbie Doll</td><td>"+a+"</td><td>20</td><td>"+bar+"</td></tr>");
        }
        if(b!=0)
        {
            invoicewindow.document.write("<tr><td>Calculator</td><td>"+b+"</td><td>30</td><td>"+cal+"</td></tr>");
        }
        if(c!=0)
        {
            invoicewindow.document.write("<tr><td>Mobile Phone</td><td>"+c+"</td><td>40</td><td>"+mob+"</td></tr>");
        }
        if(d!=0)
        {
            invoicewindow.document.write("<tr><td>LG DVD</td><td>"+d+"</td><td>50</td><td>"+dvdr+"</td></tr>");
        }
        invoicewindow.document.write("<tr><td colspan=3>Total</td><td>"+tot+"</td></tr>");
        invoicewindow.document.write("</table>");
    }
    
}
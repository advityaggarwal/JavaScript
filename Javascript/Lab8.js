function compu()
{
    var P=parseInt(document.getElementById("principal").value);
    document.write(P);/*
    var rate=parseFloat(document.getElementById("roi").value);
    var duration=parseInt(document.getElementById("time").value);
   ; 
    if(P>1500000)
    {
        document.getElementById("perr").innerHTML="Invalid Amount";
    }
    else if(duration<7 || duration>15)
    {
        document.getElementById("terr").innerHTML="Invalid Time Period";
    }
    else{
        var R=rate/1200;
    var N=duration*12;
    var EMI=(P*R*Math.pow(1+R,N))/(Math.pow(1+R,N)-1);
    document.getElementById("emi").value=EMI;
    document.getElementById("amt").value=EMI*N;
    document.getElementById("int").value=(EMI*N)-P;
    }*/
}
var scores,roundScore,activeplayer,dice;

score=[0,0];
roundScore=0;
activeplayer=0;

dice=Math.floor(Math.random()*6)+1; ///floor is the greatest integer fn and random generates a numbr b/w 0 and 1
console.log(dice);

document.querySelector('#current-' + activeplayer).textContent = dice; //document object gives access to the DOM also called setter
var x= document.querySelector('#score=0').textContent;  //reading values only  also called getter
console.log(x);
document.querySelector('.dice').style.display='none';   //bcoz using css in javascript that is why used style and then attribute

function btn()
{
    //do something here
}
btn();

document.querySelector('.btn-roll').addEventListener('clcik',function()
{   /*
    1 randowm number generation*/
    var dice=math.floor(math.random()*6)+1;
    //2 dispaly the result
    var diceDOM =document.querySelector('.dice'); 
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3 update the  round score if the rolled number was not 
    
    
});  //calllback function bcoz a func is passed in another func





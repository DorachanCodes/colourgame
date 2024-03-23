var c=["r1","r2","r3","r4"];
var arr=[];
var point=0;
var genCol=[];
var compGen=[];
var cmpnt=0;


function e()
{
    var a=Math.floor(Math.random()*4);
    return a;
} 


var reply=function()
{
    $(".btn").click(function()
{
    animatePress(this.id);
    var aud=new Audio("Sounds/blue.mp3");
aud.play();

})
   arr.push(this.id);

}
$(".sub").click(function()
{Proc();
    var k=check();
    alert("COMPUTERS TURN");
     setTimeout(function() { animatePress("c"+compGen[0]);    var aud=new Audio("Sounds/blue.mp3");
     aud.play();},400);
     setTimeout(function() { animatePress("c"+compGen[1]);    var aud=new Audio("Sounds/blue.mp3");
     aud.play();},800);
     setTimeout(function() { animatePress("c"+compGen[2]);    var aud=new Audio("Sounds/blue.mp3");
     aud.play();},1200);
     setTimeout(function() { animatePress("c"+compGen[3]);    var aud=new Audio("Sounds/blue.mp3");
     aud.play();},1600);
var cc=compCheck();
setTimeout(function(){
  document.querySelector("h4").innerHTML="Score :"+cc.toString();
    document.querySelector("h3").innerHTML="Score :"+k.toString();
    for(i=0;i<=3;i++)
    {
        $("#r"+(i+1).toString()+"a").addClass("a"+genCol[i]);
        }},2000);

    genCol=[];arr=[]; compGen=[];
    Proc();
    
})
$(".resel").click(function()
{
    arr=[];
    alert("Reset Done...Kindly Reselect");
})


document.getElementById('r1').onclick=reply;
document.getElementById('r2').onclick=reply;
document.getElementById('r3').onclick=reply;
document.getElementById('r4').onclick=reply;

function check()
{
    for(var i=0;i<4;i++)
    {
        if(genCol[i]==arr[i])
        point++;
    }
    return point;
}

function animatePress(currentColor) { //to provide a press effect
    $("#"+currentColor).addClass("pressed");
    setTimeout(function () {
      $("#"+currentColor).removeClass("pressed");
    }, 400);
  }

  function Proc()
  {
    genCol=[c[e()],c[e()],c[e()],c[e()]];
    compGen=[c[e()],c[e()],c[e()],c[e()]];
  }

  function compCheck()
  {
      for(var k1=0;k1<4;k1++)
      {
          if(compGen[k1]==arr[k1])
          cmpnt++;
      }
      return cmpnt;
  }


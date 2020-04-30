var first=document.querySelector(".first");
var second=document.querySelector(".second");
var total=document.querySelector(".total");
var input=document.getElementsByTagName("input");

var btn1=document.querySelector(".btn1");
var btn2=document.querySelector(".btn2");
var reset=document.querySelector(".reset");

var count1=0,count2=0,winning=5,gameover=false;

btn1.addEventListener("click",function(){
    if(gameover==false){
        count1++;
        first.textContent=count1;
        if(count1===winning){
            first.classList.add("winner");
            gameover=true;
        }
    }   
});


btn2.addEventListener("click",function(){
    if(gameover==false){
        count2++;
        second.textContent=count2;
        if(count2===winning){
            second.classList.add("winner");
            gameover=true;
        }    
    }
});


reset.addEventListener("click",function(){
    count1=count2=0;
    gameover=false;
    first.classList.remove("winner");
    second.classList.remove("winner");
    first.textContent=second.textContent=0;
});

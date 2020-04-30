var first=document.querySelector(".first");
var second=document.querySelector(".second");
var total=document.querySelector(".total");
var input=document.getElementsByTagName("input")[0];

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
        //just for bug handling
        if(winning<count1){
            winning=count1+count2+10;
            total.textContent=winning;
            input.value=winning;
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
        //just for bug handling
        if(winning<count2){
            winning=count2+count1+10;
            total.textContent=winning;
            input.value=winning;
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

input.addEventListener("change",function(){
    winning=Number(input.value);
    total.textContent=input.value ;
});
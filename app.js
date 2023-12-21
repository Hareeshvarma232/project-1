let gameseq=[];
let userseq=[];

let btns=["yellow","red","purple","green"];



let started = false;
let level = 0;

let h2=document.querySelector("h2");

   document.addEventListener("keypress",function () {
    if(started == false){
        console.log("game started");
        started = true;

        levelUp();
    }
    
});

function gameFlash(btn) {
 btn.classList.add("flash");
  setTimeout( function ()  {
      btn.classList.remove("flash");
  },250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
     setTimeout( function ()  {
         btn.classList.remove("userflash");
     },250);
    }
 function levelUp() {

    userseq = [];
    level++;
    h2.innerText = `level ${level} your score ${level*10-10}`;
    
    let randIdx =Math.floor(Math.random()*3);
    let randcolor =btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameFlash(randbtn);
  
    
 }

 function checkAns(Idx) {
   
   if(gameseq[Idx] === userseq[Idx]) {
      if(userseq.length == gameseq.length) {
          setTimeout(levelUp,1000);
      }
   }else {
     h2.innerHTML=`Game Over! your score was <b>${level*10}</b>. <br> press any key to start`;      
      gameOver();
      reSet();
   }
 }

 function btnPress() {
   let btn = this;
   userFlash(btn);

   userColor = btn.getAttribute("id");
    userseq.push(userColor);
    
    checkAns(userseq.length-1);
 }

 let allBtns=document.querySelectorAll(".btn");
  for(btn of allBtns){
    btn.addEventListener("click",btnPress)
  }

  function reSet() {
       started = false;
       gameseq = [];
       userseq = [];
       level = 0;
       
  }
   let body=document.querySelector("body");
   function gameOver () {

   
   body.classList.add("gameover");
  setTimeout( function ()  {
      body.classList.remove("gameover");
  },250);
}
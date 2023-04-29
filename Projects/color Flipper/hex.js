// const colors=["green","red","yellow","orange","violet","Purple"];
// const color=document.querySelector(".color");
// const btn=document.getElementById("btn");

// btn.addEventListener('click',function(){
//     let RandomNumbers=colors[getRandomNumber()];
//     document.body.style.backgroundColor=RandomNumbers;
//     color.textContent=RandomNumbers;
// });

// function getRandomNumber(){
//     return Math.floor(Math.random()*colors.length);
// }

const colors=["1","2","3","4","5","6","7","8","9","10","A","B","C","D","E","F"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");


btn.addEventListener("click",function(){
    let hex="#";
  
for(let i=0;i<6;i++){
hex+=colors[getRandomNumber()];
}
document.body.style.backgroundColor=hex;
color.textContent=hex;
color.style.backgroundColor=hex;
})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}

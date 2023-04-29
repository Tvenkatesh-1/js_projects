let count=0;
const value=document.querySelector("#value");
const btns=document.querySelectorAll("button");

btns.forEach(function(button){
    button.addEventListener("click",function(e){
       const Button= e.currentTarget.classList;
       if(Button.contains("Decrease")){
        count--;
       }
       else if(Button.contains("Increase")){
        count++;
       }
       else{
        count=0;
       }
       if(count>0){
        value.style.color="SkyBlue";
       }
       if(count<0){
        value.style.color="Tomato";
       }
       if(count==0){
        value.style.color="Orange";
       }
       value.textContent=count;
    })
})
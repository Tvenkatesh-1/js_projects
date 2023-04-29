let string="";
let Buttons=document.querySelectorAll('.button');
Array.from(Buttons).forEach((button)=>{  
   button.addEventListener('click',(e)=>{
    if(e.target.innerHTML== '=')
    {
        string=eval(string);
        document.querySelector('input').value=string;
    }
   else if(e.target.innerHTML== 'C')
   {
        // string=string.replace(string ," ");
        string=" ";
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML== '*')
    {
        string=eval(string);
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML== 'Delete')
    {
        string=string.slice(0,-1);
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML== '/')
    {
        string=eval(string);
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML== '-')
    {
        string=eval(string);
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML== '+')
    {
        string=eval(string);
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML== '%')
    {
        string=eval(string);
        document.querySelector('input').value=string;
    }
    else{
        console.log(e.target);
        string=string + e.target.innerHTML;
        document.querySelector('input').value=string;
        }
   })
})
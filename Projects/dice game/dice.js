
function rolldice(){
    const noofdice=document.getElementById("noofdice").value
    const diceresult=document.getElementById("diceresult")
    const diceimage=document.getElementById("diceimage")
    const values=[]
    const images=[]


    for(let i=0;i<noofdice;i++){
        const value=Math.floor(Math.random() * 6) + 1;
        values.push(value);
        
        images.push(`<img src="${value}.png">`);
    }
    diceresult.textContent=`dice ${values.join(" , ")}`;
    diceimage.innerHTML=images.join(" ")

    
}
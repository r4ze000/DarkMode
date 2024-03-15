let btn=document.querySelector("i");
let cont=document.querySelector(".container");
let page=document.querySelector(".page");
let h3=document.querySelectorAll("h3");
let h2=document.querySelectorAll("h2");
let h6=document.querySelectorAll("h6");

if(page)
btn.addEventListener("click",()=>{
    cont.classList.toggle("white");
    page.classList.toggle("black");
    btn.classList.toggle("white");
    for(b of h2){
        b.classList.toggle("black1");
    }

    for(h of h3){
        h.classList.toggle("black1");
    }


    for(a of h6){
        a.classList.toggle("black1");
    }
});
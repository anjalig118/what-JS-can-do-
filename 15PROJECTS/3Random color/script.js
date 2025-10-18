var box=document.querySelector("#box");

var btn=document.querySelector("button");

btn.addEventListener("click",()=>{
    c1=Math.floor(Math.random()*255)
    c2=Math.floor(Math.random()*255)
    c3=Math.floor(Math.random()*255)
    box.style.backgroundColor=`rgb(${c1},${c2},${c3})`
})

var btn=document.querySelector("button")
var h1=document.querySelector("h1")
var growth = document.querySelector("#growth")
var message = document.querySelector("h2")
var grow=0
var random = Math.floor(Math.random()*100)
btn.addEventListener("click",function(){
    var si = setInterval(function(){
        grow++
        h1.innerHTML = grow +'%'
        growth.style.width= grow +'%'
        growth.style.backgroundColor = 'green'
        
    },random)

    setTimeout(function(){
        clearInterval(si)
        btn.innerHTML='Downloded'
        btn.style.pointerEvents='none'
        message.innerHTML=`Your file is downloded in ${random/10} second `
    
    },random*100)

})





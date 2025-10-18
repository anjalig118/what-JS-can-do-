const btn = document.querySelector('button')
const circle = document.querySelector('.circle')

var flag=0

btn.addEventListener('click',()=>{
    if(flag==0){
        circle.style.backgroundColor = "yellow"
        flag=1
    }
    else{
        circle.style.backgroundColor = "black"
        flag=0
    }
})
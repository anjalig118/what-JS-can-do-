var h1=document.querySelector("h1")
var btn=document.querySelector("button")
let flag=0
btn.addEventListener("click",function(){
    if(flag==0){
        h1.innerHTML="Friends"
        btn.innerHTML="Remove"
        flag=1
    }
     else{
        flag=0
         h1.innerHTML="Stranger"
         btn.innerHTML="Add Friends"
        
      }
   })
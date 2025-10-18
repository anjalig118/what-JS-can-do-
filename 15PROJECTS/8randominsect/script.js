var btn = document.querySelector('button')
var body = document.querySelector('body')

var insect = ['https://static.vecteezy.com/system/resources/previews/024/499/853/non_2x/social-insects-images-ai-generative-free-png.png',
              'http://www.pngmart.com/files/3/Grasshopper-PNG-Clipart.png',
              'http://pluspng.com/img-png/png-insects--1020.png',
              'https://purepng.com/public/uploads/large/purepng.com-beetle-bugnature-macro-danger-insect-beetle-bug-pest-bite-smallanimals-8215239939988kkag.png',
              'https://pngimg.com/uploads/spider/spider_PNG10.png']

btn.addEventListener('click',function(){
    var img=document.createElement('img')

    var num = Math.floor(Math.random()*insect.length)

    img.setAttribute('src',insect[num])

    img.style.position='absolute'
    img.style.height='100px'
    img.style.width='100px'

    img.style.left= Math.random()*80 +'%'
    img.style.top= Math.random()*80 +'%'
    img.style.rotate= Math.random()*360 +'deg'

    body.appendChild(img)

})




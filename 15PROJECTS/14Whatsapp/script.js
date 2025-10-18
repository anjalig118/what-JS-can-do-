var arr = [
    {
        dp:'https://images.unsplash.com/photo-1730941343980-5d81ce7c768b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
        story:'https://images.unsplash.com/photo-1732806685351-bafb9848cebf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D',
        username: 'Anjali',
        time: '5 min ago'
    },
    {
        dp:'https://images.unsplash.com/photo-1733910087506-f634f8a806de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1734188515104-5f036a02f551?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D',
        username: 'Den',
        time: '30 min ago'
    },
    {
        dp:'https://images.unsplash.com/photo-1734533992947-44970e6e5010?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1733126916745-ae6453f1fe4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D',
        username: 'John',
        time: '10 min ago'
    },
    {
        dp:'https://images.unsplash.com/photo-1730941343980-5d81ce7c768b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
        story:'https://images.unsplash.com/photo-1732806685351-bafb9848cebf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D',
        username: 'James',
        time: '10 min ago'
    },
    {
        dp:'https://images.unsplash.com/photo-1733910087506-f634f8a806de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1734188515104-5f036a02f551?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D',
        username: 'Jannie',
        time: '9 min ago'
    },
    {
        dp:'https://images.unsplash.com/photo-1734533992947-44970e6e5010?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1733126916745-ae6453f1fe4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D',
        username: 'Doe',
        time: '59 min ago'
    },
]

var sum = ''
arr.forEach(function(elem,idx){
    sum = sum + `<div class="status" id="${idx}">
                <img src="${elem.dp}" alt="">
                <div class="status-in">
                    <h4>${elem.username}</h4>
                    <h6>${elem.time}</h6>
                </div>
            </div>`
})

var allStatus = document.querySelector('#allStatus')
var full = document.querySelector('#full')

allStatus.innerHTML = sum

allStatus.addEventListener('click',function(dets){
    var gold = arr[dets.target.id]

    full.style.display = 'block'
    full.style.backgroundImage = `url(${gold.story})`

    setTimeout(function(){
        full.style.display = 'none'
    },3000)
    
})



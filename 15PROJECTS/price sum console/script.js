var friends = [
    {
        name:"sarthak",
        age:69,
        quantity:43,
        price:50000
    },
    {
        name:"Harsh ",
        age:50,
        quantity:64,
        price:70000

    }, {
        name:"Harshi",
        age:45,
        quantity:54,
        price:10000
    }
]

var sum = 0
friends.forEach(function(elem){
    
    sum = sum + elem.quantity*elem.price

})
console.log(sum)
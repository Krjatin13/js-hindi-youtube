// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr){
    console.log(num)
}

const greetings = "Hello World!"
for (const greet of greetings){
    console.log(`Each char is ${greet}`)
}

// maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

console.log(map);

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}


const score = 100
console.log(score);

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.896

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++ Maths +++++++++++++++++++++++++

console.log(Math);
console.log(Maths.abs(-4));
console.log(Maths.round(4.6));
console.log(Maths.ceil(4.5));
console.log(Maths.floor(4.9));
console.log(Maths.min(4, 3 , 6, 8));
console.log(Maths.max(4, 3, 6, 8));


console.log(Maths.random());  // always return the value of 0 and in between 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20


console.log(Math.floor(Math.random() * (max - min + 1)) + min)





function sayMyName(){
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");

}

// sayMyName()

// function addTwoNumbers(number1, number2)   //  here number1 and number2 are called as a parameter
// {
//     console.log(number1 + number2);

// }

// addTwoNumbers(3, 4)   // here 3 and 4 called as a arguments

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    
    return number1  + number2
}
const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username){
    if(username === undefined){

        // console.log("Please enter a username");
        // return

    }
    // return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(...num1){     // ... num1 this is a rest Operator or spread
    return num1
}

// console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`uername is ${anyobject.username} and price is ${anyobject.price}`);

}

 // handleObject(user)
 handleObject({
    username: "sam",
    price: 399
 })

 const myNewArray = [200, 400, 100, 600]

 function returnSecondValue(getArray){
      return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
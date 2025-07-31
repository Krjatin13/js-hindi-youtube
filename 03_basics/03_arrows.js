const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


  // Arrow function
const chai = () => {
    let username = "hitesh"
    console.log(this.username);
}

// chai ()

// const addTwo = (num1, num3) => {
//     return num1 + num2                // if we uses parenthesis we have to write return  
// }                                     // Explicit function


const addTwo = (num1, num3) =>  num1 + num2    // Implicit function



console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach() 
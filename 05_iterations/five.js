const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function greet(val) {

//     console.log(val);
// })

// coding.forEach((item) => {
//     console.log(item)
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach ((item, index, array) => {
//     console.log(item, index, array);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"

    },
    {
        languageName: "python",
        languageFileName: "py"

    },
    {
        languageName: "java",
        languageFileName: "java"

    }
]

myCoding.forEach(( item) => {

    console.log(item.languageName);
})
    
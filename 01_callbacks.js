//What are callbacks?

//A function that is called into another function(Higher order function)

// const timesTwo = (number) =>{
//     return number * 2;
// }

// const doSomethingWithNumber = (number, callback) => {
//     return callback(number);
// }
// timesTwo(6)
// console.log(doSomethingWithNumber(6, ()=>{

// }))
//array.map
//array.filter
//setTimout Review
// setTimeout(()=>{
//     console.log("YAY IT WORKS!")
// }, 2000)

try {
    setTimeout(2000)
} catch(error) {
    console.log("You broke the code!!!!", error)
}

console.log("Another console log to execute")
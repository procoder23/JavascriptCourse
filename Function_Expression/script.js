// Function expression is a way to define functions as values or variable

// const hello = function(){
//     console.log("Hello Coders!");
// }
// // hello();

// //Function declarartion defines a reusable block of code that performs a specific tasks

// setTimeout(hello, 3000);

//---------------------------------------------------------------------------------------------------

const numbers = [1,2,3,4,5,6];

// console.log(numbers.map(square));

function square(element){
    return Math.pow(element, 2);
}

const squares = numbers.map(function(element){
    return Math.pow(element, 2);
})

console.log(squares);
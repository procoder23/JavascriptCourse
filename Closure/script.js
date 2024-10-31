// Closure = A function defined inside of another function,
//           the inner function has access to the variable and scope of the outer function

// function outer() {
//     let message = "Hello";

//     function inner(){
//         console.log(message);
//     }
//     inner();
// }

// outer();

function createCount(){
    let count = 0;

    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }
    return {increment};
}

const counter = createCount();
counter.increment();
counter.increment();
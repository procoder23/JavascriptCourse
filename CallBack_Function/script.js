// Callback is a function that is passed as a argument to the other function.
// Use to handle asynchronous operations:
// 1. Reading a file
// 2. Network requests
// 3. Interacting with Database

// Hey when you are done, Call this nextt!

function hello(callback){
    console.log("Hello Prathamesh");
    setTimeout(()=> {
        callback();
    },3000);
}

function bye(){
    console.log("Bye Prathamesh");
}

hello(bye);
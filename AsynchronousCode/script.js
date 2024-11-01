//Synchronous = Executes line by line continously in a sequencial manner code that waits for an operation to complete

// Asynchronous = Allows multiple operations to be performed concurrently without waiting 
//e.g (I/O operations, network requests, fetching data)

function func1(callback){
    setTimeout(()=> {console.log("Task1");
        callback();
    }, 3000);
}

function func2(){
    console.log("Task1");
    console.log("Task2");
    console.log("Task13");
}

func1(func2);
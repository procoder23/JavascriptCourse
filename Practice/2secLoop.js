// Create a loop which will run for 2 sec.

function runLoop2Sec() {
    //get curent date
    let start = Date.now();

    while(Date.now() - start < 2000){
        console.log("Running...");
    }
    console.log("Loop stopped..");
}

runLoop2Sec();
//variable scope = Where variable is accessible and recognized(Local/ Global)
let x = 3;

function function1() {
    let x = 1;
    console.log(x);
}

function function2() {
    let y = 2;
    console.log(x);
}

function1();

// Note : First priority is for local scope.
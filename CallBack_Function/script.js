function hello(callback){
    console.log("Hello Prathamesh");
    callback();
}

function bye(){
    console.log("Bye Prathamesh");
}

hello(bye);
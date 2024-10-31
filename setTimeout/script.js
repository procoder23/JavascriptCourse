let timeoutID;

function start(){
    timeoutID = setTimeout(()=> window.alert("Hello!"),3000);
}

function stop(){
    clearTimeout(timeoutID);
}
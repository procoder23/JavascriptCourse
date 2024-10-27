const myBtn = document.getElementById("btn");
const myLabel = document.getElementById("lbl");
const min = 1;
const max = 10;
let randomNo;

myBtn.onclick = function(){
    randomNo = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNo;
};
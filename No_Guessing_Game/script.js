const minNum = 50;
const maxNum = 100;
const ans = Math.floor(Math.random() * (maxNum-minNum+1))+minNum;
let attempt = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Lets guess one number between ${minNum} - ${maxNum}`);
    if(isNaN(Number(guess))){
        window.alert("Please add the valid number..");
    }
    else if(Number(guess) < minNum || Number(guess) > maxNum){
        window.alert(`Please add number in between ${minNum} - ${maxNum}`);
    }
    else{
        attempt++;
        if(Number(guess) < ans){
            window.alert("Too LOW, Try again!");
        }
        else if(Number(guess) > ans){
            window.alert("Too HIGH, Try again!");
        }
        else{
            window.alert(`Correct answer was ${ans}. It took you ${attempt} attempts to react to correct`);
            running = false;
        }
    }
}
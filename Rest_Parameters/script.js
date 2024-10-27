//Rest parameter : It allows a function to pass/ accept indefinite number of an arguments as an array.
//--------------------------------------------------------------------------------------

// function openFreidge(...foods) {
//     console.log(foods);
// }

// const food1 = "Samosa";
// const food2 = "Vanilla";
// const food3 = "Chai";
// const food4 = "Biryani";

// openFreidge(food1, food2, food3, food4);

//------------------------------- SUM FUNCTION ------------------------------------------


// function sum(...numbers) {
//     let result = 0;

//     for(let number of numbers){
//         result += number;
//     }
//     return result;
// }

// let numbers = [1,2,3,4,5];
// const res = sum(...numbers,6);
// console.log(`Result of summation is :${res}`);

//--------------------------------------------- Combine String -------------------------------------------
function combineString(...strings){
    return strings.join(" ");
}
console.log(combineString("Mr", "Prathamesh", "Mestry"));
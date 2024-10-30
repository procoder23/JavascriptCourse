//map() = map method accept a callback and aply function to each element
//        of an array, then return new array.

// const num = [1,2,3,4,5];

// console.log(num.map(squares));

// function squares(elements){
//     return Math.pow(elements, 2);
// }

//--------------------------------------------------------------------------------------

// const students = ["Raghav", "Khushi", "Prem", "Harshad"];

// console.log(students.map(toUpper));

// function toUpper(elements){
//     return elements.toUpperCase();
// }

//--------------------------------------------------------------------------------------------

const dates = ['2024-01-17', '2025-02-10', '2026-03-15'];

const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${[parts[0]]}`;
}
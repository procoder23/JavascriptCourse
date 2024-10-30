// forEach() = method is used to iterate over the ElementInternals
//             of an array and apply a specified function(Callbacks)
//             array.forEach(Callback)
//------------------------------------------------------------------------------

// let num = [1,2,3,4,5];

// function display(elements){
//     console.log(elements);
// }

// function double(elements){
//     elements += elements;
//     console.log(elements);
// }

// function triple(elements){
//     elements = elements * 3;
//     console.log(elements);
// }

// display(num);
// // num.forEach(display);
// num.forEach(double);
// num.forEach(triple);

let fruits = ['Banana', 'Apple', 'Orange', 'Coconut'];

fruits.forEach(upperCase);
fruits.forEach(display);

function upperCase(element, index, array) {
    array[index] = element.toUpperCase();
}

function display(elements){
    console.log(elements);
}
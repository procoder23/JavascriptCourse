let fruits = ['Mango', 'Banana', 'Orange', 'Apple'];

console.log(fruits[0]);
fruits.push('Coconut');
fruits.unshift('Apple'); //shift element to beginning 
// fruits.pop()
fruits.shift() // remove element from beginning 
console.log(fruits.length);

for(let i =0; i< fruits.length; i++) {
    console.log(fruits[i]);
}

fruits.sort();

for(let i =0; i< fruits.length; i++) {
    console.log(fruits[i]);
}
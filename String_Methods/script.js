let name = "Prathamesh";
console.log(name.charAt(1)); //charAt() method return the character at the index
console.log(name.indexOf('a')); // indexOf() method return index of given character
console.log(name.lastIndexOf('a'));
console.log(name.length);
console.log(name.trim());
console.log(name.toUpperCase());
let newName = name.toLowerCase();
console.log(newName);
let newName1 = name.repeat(2);
console.log(newName1);
console.log(name.startsWith("pra"));
console.log(name.includes("Pra"));
let mob = "8767-87-8540";
console.log(mob.replaceAll("-",""));
console.log(mob.padStart(15, 0)); 
console.log(mob.padEnd(15, 0));
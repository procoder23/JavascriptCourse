// 1. document.getElementById() //Element OR NULL
// 2. document.getElementsClassName() //HTML COLLECTION
// 3. document.getElementByTagName() //HTML COLLECTION
// 4. document.querySelector() //ELEMENT OR NULL
// 5. document.querySelectorAll() //NODELIST

const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

const fruits = document.getElementsByClassName('fruits');
fruits[0].style.backgroundColor = "Red";
console.log(fruits[0]);
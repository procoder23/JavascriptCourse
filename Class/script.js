// class = (ES6 feature) provides a more structured and cleaner way to work with objects
// compare to traditional constructor function.

class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product name is ${this.name}.`);
        console.log(`Product price is ${this.price}.`);
    }
}

const product1 = new Product("Amul Milk", 30);
product1.displayProduct();
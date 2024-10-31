// getter = spl method that makes a property readable.
// setter = spl method that makes a property writable.

// class Rectangle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }
// }

// const rect = new Rectangle(-1000000, "Pizza");
// console.log(rect.width);
// console.log(rect.height);
// *************************************************************
// In above you could see it accept garbage and unwanted values.
//We will now add condition using 
// *************************************************************
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }else{
            console.error("Width should be a positive number");
        }
    }
    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }else{
            console.error("Height should be a positive number");
        }
    }

    get width(){
        return `${this._width}cm`;
    }

    get height(){
        return `${this._height}cm`;
    }

    get area(){
        return `${this._width * this._height}cm`;
    }
}

const rect = new Rectangle(3, 4);

rect.width = 5;
rect.height = 6;

console.log(rect.width);
console.log(rect.height);
console.log(rect.area);
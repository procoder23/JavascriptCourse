//Static Keyword defines properties or method thatbelong to a
// class itself rather than the objects created from that class

class MathUtils{
    static PI = 3.145;

    static getDiameter(radius){
        return radius * 2;
    }
}

//Here we dont need to create object it belong to class itself
console.log(MathUtils.getDiameter(4));
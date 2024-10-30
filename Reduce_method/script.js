// .reduce() = reduce the elements of an array to a single value

const grades = [75,90,50,60];

const max = grades.reduce(getMax);
console.log(max);

const min = grades.reduce(getMin);
console.log(min);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}
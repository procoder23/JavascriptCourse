const fruits = [{name:"Apple", color: "Red", calories: 95},
                {name:"Orange", color: "Orange", calories: 45},
                {name: "Banana", color: "Yellow", calories:  89},
                {name: "Mango", color: "Yellow", calories: 60},
                {name: "Water Melon", color: "Green", calories: 30}
                ];

fruits[0].name
fruits.push({name: "Grapes", color: "Purple"});
console.log(fruits[0].name);
console.log(fruits);

fruits.forEach(fruits => console.log(fruits.calories));

fruits.map(fruits => console.log(fruits.name));

const lessCalFruits = fruits.filter(fruits => fruits.calories < 70);

console.log(lessCalFruits);

const maxFruit = fruits.reduce((max, fruit)=>
    fruit.calories > max.calories ? fruit : max
);

console.log(maxFruit);

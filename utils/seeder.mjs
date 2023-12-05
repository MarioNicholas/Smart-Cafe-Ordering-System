import { faker } from '@faker-js/faker';

function generateMeals(){
    const mealsName = faker.animal.cow() + " Stew"
    return {
        name: mealsName,
        price: Number(faker.commerce.price(
            {
                min: 50000,
                max: 800000
            }
        )),
        description: "Delicious " + mealsName,
    }
}

function generateCoffee(){
    const coffeeName = faker.commerce.product()+ " Coffee"
    return {
        name: coffeeName,
        price: Number(faker.commerce.price(
            {
                min: 20000,
                max: 150000
            }
        )),
        description: "Delicious " + coffeeName,
    }
}

let foods = [];
let coffee = [];
for (let i = 0; i < 10; i++) {
    foods.push(JSON.stringify(generateMeals()));
    coffee.push(JSON.stringify(generateCoffee()));
}

console.log(foods);
console.log('\n')
console.log(coffee);

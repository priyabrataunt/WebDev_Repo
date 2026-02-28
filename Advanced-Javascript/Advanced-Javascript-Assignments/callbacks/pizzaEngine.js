 
// ? In a real kitchen, things happen in a specific order:
// * Place the order (Preparation)
// * Bake the pizza (The long wait)
// * Deliver the pizza (The final result)


function placeOrder(pizzaType, callback){
    console.log(`Order received ${pizzaType} pizza!`);

    setTimeout(() => {
        console.log(`Preparation finished for ${pizzaType}`);
        callback(pizzaType)
    },1000);
}

function bakePizza(pizzaType, callback){
    console.log(`Baking ${pizzaType} pizza`);

    setTimeout(() => {
        console.log(`Baking ${pizzaType} is finished`);
        callback(pizzaType)
    }, 2000);
}

function boxPizza(pizzaType, callback){
    console.log(`Putting the${pizzaType} in a box...`);

    setTimeout(() => {
        callback(pizzaType);
    },3000);
}

function deliverPizza(pizzaType){
    console.log(`The ${pizzaType} has been delivered. Enjoy!!`)
}

placeOrder("pepperoni", (type) => {
    bakePizza(type, (type) => {
        boxPizza(type, deliverPizza)
    });
});


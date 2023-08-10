function pizzaOven(crustType, sauceType, cheeses, toppings) {
  let pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;
  return pizza;
}

let p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni","sausage"]);
let p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
let p3 = pizzaOven("thin crust", "white", ["cheddar", "mozzarella", "gouda", "feta"], ["sausage", "bacon"]);
let p4 = pizzaOven("stuffed", "traditional", ["mozzarella"], ["spinach", "sausage"]);
console.log(p1, p2, p3, p4);




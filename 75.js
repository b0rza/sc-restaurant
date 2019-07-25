function serve(cookedFood) {
  return 'plate of ' + cookedFood;
}

function cook(order) {
  var recipes = {
    pizza: 'baked: tomato, mozzarella, basil on raised dough'
  }

  // We'll make functions for these, same as before,
  // but with a twist - functions are values

  // 1. make dough
  var makeDough = function() {
    return 'raised dough'; // I don't need to know what for
  }

  // 2. put toppings
  var putToppings = function(order, base) {
    var toppings = {
      pizza: 'tomato, mozzarella, basil'
    }
    return toppings[order] + ' on ' + base;
  }

  // 3. bake
  var bake = function(preppedMeal) {
    return 'bake: ' + preppedMeal;
  }

  var dough = makeDough();
  var preppedMeal = putToppings(order, dough);
  var cookedMeal = bake(preppedMeal);
  return cookedMeal;
}

function haveDinner(order) {
  var cookedFood = cook(order);
  const servedFood = serve(cookedFood);
  eat(servedFood);
};

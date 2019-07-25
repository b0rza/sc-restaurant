// This means that the chef would have to tell everyone what to do and WHEN
// That's a poor chef, imagine having risottos and paprikas in parallel...

// He decides to reorganize...
// He's going to tell everyone to pass their work along to the next guy in the
// chain.

// Just tell the person before you what you need
// Last guy says: I need a prepped meal
// The guy before says: I need dough
// The first guy needs nothing

function serve(cookedFood) {
  return 'plate of ' + cookedFood;
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
  return 'baked: ' + preppedMeal;
}

var cook = function (order) {
  var cookedMeal = bake(putToppings(order, makeDough()))
  return cookedMeal;
}

var eat = function(plate) {
  return 'eat ' + plate;
}

function haveDinner(order) {
  var cookedFood = cook(order);
  const servedFood = serve(cookedFood);
  return eat(servedFood);
};

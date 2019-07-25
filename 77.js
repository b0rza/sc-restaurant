var serve = function (cookedFood) {
  console.log('plate of ' + cookedFood);
  return 'plate of ' + cookedFood;
}

var makeDough = function() {
  return 'raised dough';
}

var putToppings = function(order, base) {
  var toppings = {
    pizza: 'tomato, mozzarella, basil'
  }
  return toppings[order] + ' on ' + base;
}

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

// But serving can only happen after the food has been cooked
// We don't want the waiter coming in, we'll call him when done
function haveDinner(order) {
  //   // I know that for whatever comes up next, I'll want to have what has
  //   // happened before. This is a callback!
  //   // JS is great for event driven stuff - eg. clicking a button, DB calls

  var thingToDoAfterCooking = function(cookedFood) {
    serve(cookedFood);
  }

  var servedFood = cook(order, thingToDoAfterCooking);
};

var cook = function(order, thingToDoAfterCooking) {
  var cookedMeal
  cookedMeal = bake(putToppings(order, makeDough()))
  thingToDoAfterCooking(cookedMeal);
}


// ==================================
// This is a bit forced because we are not cooking
// Let's wait...
var cook = function(order, thingToDoAfterCooking) {
  COOK_TIME = 3000;
  var cookedMeal;
  var thingThatsTakingTime = function() {
    var cookedMeal = bake(putToppings(order, makeDough()))
    thingToDoAfterCooking(cookedMeal);
  };
  window.setTimeout(thingThatsTakingTime, COOK_TIME);
  return cookedMeal;
}

// ==================================
// This is a bit forced because we are not cooking
// Let's wait...
var cook = function(order, thingToDoAfterCooking) {
  COOK_TIME = 3000;
  var cookedMeal;
  var thingThatsTakingTime = function() {
    cookedMeal = bake(putToppings(order, makeDough()));
    thingToDoAfterCooking(cookedMeal);
  };
  window.setTimeout(thingThatsTakingTime, COOK_TIME);
}

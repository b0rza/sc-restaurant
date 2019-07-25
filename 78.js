var serve = function (cookedFood, callback) {
  var result = 'plate of ' + cookedFood;
  callback(result);
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

var cook = function(order, thingToDoAfterCooking) {
  COOK_TIME = 3000;
  var cookedMeal;
  var thingThatsTakingTime = function() {
    cookedMeal = bake(putToppings(order, makeDough()));
    thingToDoAfterCooking(cookedMeal);
  };
  window.setTimeout(thingThatsTakingTime, COOK_TIME);
}

var eat = function(plate) {
  console.log('eat a ' + plate);
  return 'eat ' + plate;
}

// Depending on the length of the callback chain, this can get pretty ugly...
function haveDinner(order) {
  var thingToDoAfterCooking = function(cookedFood) {
    serve(cookedFood);
    eat();
  }

  var servedFood = cook(order, function(cookedFood) {
    const servedFood = serve(cookedFood);
    eat(servedFood);
  });
};

// ...but serving also takes time, what about waiting to pay afterwards...
// ... CALLBACK HELL!!!
function haveDinner(order) {
  var servedFood = cook(order, function(cookedFood) {
    serve(cookedFood, function(servedFood) {
      eat(servedFood);
    });
  });
};
